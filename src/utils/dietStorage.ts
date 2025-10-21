import { DietRecord } from "../components/DietListItem";

const STORAGE_KEY = "diet_records";
const FIRST_RECORD_KEY = "diet_first_record_completed";

export function saveDietRecord(record: DietRecord): boolean {
  try {
    const records = getDietRecords();
    records.push(record);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    
    // Check if this is the first record
    const isFirstRecord = !localStorage.getItem(FIRST_RECORD_KEY);
    if (isFirstRecord) {
      localStorage.setItem(FIRST_RECORD_KEY, "true");
    }
    
    return isFirstRecord;
  } catch (error) {
    console.error("Failed to save diet record:", error);
    return false;
  }
}

export function getDietRecords(): DietRecord[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to get diet records:", error);
    return [];
  }
}

export function getDietRecordsByDate(date: string): DietRecord[] {
  const records = getDietRecords();
  return records.filter(record => record.date === date);
}

export function deleteDietRecord(id: string): void {
  try {
    const records = getDietRecords();
    const filtered = records.filter(record => record.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error("Failed to delete diet record:", error);
  }
}

export function getTodayDate(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

export function getDatesThatHaveRecords(): string[] {
  const records = getDietRecords();
  const uniqueDates = new Set(records.map(record => record.date));
  return Array.from(uniqueDates);
}
