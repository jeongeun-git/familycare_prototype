export function getToday(): Date {
  // Fixed to October 10, 2025 for testing
  return new Date(2025, 9, 10); // Month is 0-indexed, so 9 = October
}

export function getTodayDate(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function getMonthName(date: Date): string {
  return `${date.getMonth() + 1}월`;
}

export function getDayOfWeek(date: Date): string {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return days[date.getDay()];
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getCalendarDates(currentDate: Date) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  
  const dates = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    dates.push({
      date: day,
      day: getDayOfWeek(date),
      fullDate: formatDate(date),
    });
  }
  
  return dates;
}

export function isSameDate(date1: string, date2: string): boolean {
  return date1 === date2;
}
