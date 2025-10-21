export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  times: string[];
  startDate: string;
  endDate?: string;
}

export interface MedicationRecord {
  id: string;
  date: string;
  medicationId: string;
  medicationName: string;
  time: string;
  taken: boolean;
}

const MEDICATIONS_KEY = "medications";
const MEDICATION_RECORDS_KEY = "medication_records";
const FIRST_RECORD_KEY = "medication_first_record_completed";

// Medication Management
export function saveMedication(medication: Medication): void {
  try {
    const medications = getMedications();
    medications.push(medication);
    localStorage.setItem(MEDICATIONS_KEY, JSON.stringify(medications));
  } catch (error) {
    console.error("Failed to save medication:", error);
  }
}

export function getMedications(): Medication[] {
  try {
    const stored = localStorage.getItem(MEDICATIONS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to get medications:", error);
    return [];
  }
}

export function deleteMedication(id: string): void {
  try {
    const medications = getMedications();
    const filtered = medications.filter((med) => med.id !== id);
    localStorage.setItem(MEDICATIONS_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error("Failed to delete medication:", error);
  }
}

// Medication Record Management
export function saveMedicationRecord(record: MedicationRecord): boolean {
  try {
    const records = getMedicationRecords();
    records.push(record);
    localStorage.setItem(MEDICATION_RECORDS_KEY, JSON.stringify(records));
    
    // Check if this is the first record ever
    const isFirstRecord = !localStorage.getItem(FIRST_RECORD_KEY);
    if (isFirstRecord) {
      localStorage.setItem(FIRST_RECORD_KEY, "true");
    }
    
    return isFirstRecord;
  } catch (error) {
    console.error("Failed to save medication record:", error);
    return false;
  }
}

export function getMedicationRecords(): MedicationRecord[] {
  try {
    const stored = localStorage.getItem(MEDICATION_RECORDS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to get medication records:", error);
    return [];
  }
}

export function getMedicationRecordsByDate(date: string): MedicationRecord[] {
  const records = getMedicationRecords();
  return records.filter((record) => record.date === date);
}

export function getTodayDate(): string {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

export function getDatesThatHaveRecords(): string[] {
  const records = getMedicationRecords();
  const uniqueDates = new Set(records.map((record) => record.date));
  return Array.from(uniqueDates);
}

export function getCompletionRateForDate(date: string): {
  total: number;
  completed: number;
  rate: number;
} {
  const medications = getMedications();
  const records = getMedicationRecordsByDate(date);
  
  // Calculate total medication slots for this date
  const totalSlots = medications.reduce((acc, med) => acc + med.times.length, 0);
  
  // Calculate completed medications
  const completedSlots = records.filter(record => record.taken).length;
  
  const rate = totalSlots > 0 ? Math.round((completedSlots / totalSlots) * 100) : 0;
  
  return {
    total: totalSlots,
    completed: completedSlots,
    rate: rate
  };
}

export function getConsecutiveDays(upToDate: string): number {
  const datesWithRecords = getDatesThatHaveRecords();
  
  if (datesWithRecords.length === 0) return 0;
  
  // Sort dates in descending order
  const sortedDates = datesWithRecords.sort((a, b) => b.localeCompare(a));
  
  let consecutiveDays = 0;
  const targetDate = new Date(upToDate);
  
  for (let i = 0; i <= 365; i++) {
    const checkDate = new Date(targetDate);
    checkDate.setDate(checkDate.getDate() - i);
    const dateString = checkDate.toISOString().split("T")[0];
    
    const completionData = getCompletionRateForDate(dateString);
    
    // Check if this date has 100% completion
    if (completionData.rate === 100) {
      consecutiveDays++;
    } else {
      // Stop counting when we hit a non-100% day
      break;
    }
  }
  
  return consecutiveDays;
}