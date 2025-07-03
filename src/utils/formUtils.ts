// Utility to chunk an array into rows of a fixed size
export function chunkArray<T>(array: T[], size: number): T[][] {
  return array.reduce((rows: T[][], item, idx) => {
    if (idx % size === 0) rows.push([]);
    rows[rows.length - 1].push(item);
    return rows;
  }, []);
}

// Filter tasks by status
export function filterTasksByStatus(tasks: any[], completed: boolean) {
  return tasks.filter(
    (t) => String(t.completed) === String(completed) || String(t.completed) === (completed ? "1" : "0")
  );
} 