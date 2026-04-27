import { useState, useEffect } from 'react';

const STORAGE_KEY = 'awt_completed_lectures';

export function useProgress() {
  const [completed, setCompleted] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }, [completed]);

  const toggle = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const isCompleted = (id) => completed.includes(id);

  return { completed, toggle, isCompleted };
}
