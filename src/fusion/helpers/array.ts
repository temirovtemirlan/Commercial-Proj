export function divideArray<T>(arr: T[], parts: number): T[][] {
  const result: T[][] = [];
  const chunkSize = Math.ceil(arr.length / parts);

  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }

  while (result.length < parts) {
    result.push([]);
  }

  return result;
}
