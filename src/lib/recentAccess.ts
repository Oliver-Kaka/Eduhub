const KEY = "eduhub_recent_access";

export interface RecentAccess {
  courseCode: string;
  courseName: string;
  unitCode?: string;
  unitName?: string;
  year?: number;
  courseId?: string;
  link: string;
  timestamp: number;
}

export function recordRecentAccess(entry: Omit<RecentAccess, "timestamp">) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...entry, timestamp: Date.now() }));
  } catch {
    // localStorage may be unavailable; ignore
  }
}

export function getRecentAccess(): RecentAccess | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.courseCode) return null;
    return parsed as RecentAccess;
  } catch {
    return null;
  }
}

export function clearRecentAccess() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
