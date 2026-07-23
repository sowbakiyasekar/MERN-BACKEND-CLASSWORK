const STORAGE_KEY = 'savedNewsIds';

export function loadSavedNewsIds() {
  if (typeof window === 'undefined') return [];
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveSavedNewsIds(savedIds) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
  } catch {
    // ignore write failures
  }
}
