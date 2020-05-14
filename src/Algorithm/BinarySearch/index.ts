/**
 * @author Sin Nguyen
 * @email nhatndm1193@gmai.com
 * @create date 2020-05-14 01:58:05
 * @modify date 2020-05-14 01:58:05
 * @desc Binary Search implementation
 */

export function binarySearch<T>(key: T, arrays: T[]): number {
  function inner(
    innerKey: T,
    innnerArray: T[],
    start: number,
    end: number,
  ): number {
    let indexFound: number = 0;

    if (start > end) return -1;

    const mid = Math.floor((start + end) / 2);

    if (innnerArray[mid] === innerKey) return mid;

    // Search in left half
    indexFound = inner(innerKey, innnerArray, start, mid - 1);

    // If this key does not present in right half
    if (indexFound === -1) {
      indexFound = inner(innerKey, innnerArray, mid + 1, end);
    }

    return indexFound;
  }

  const indexKey = inner(key, arrays, 0, arrays.length);

  return indexKey;
}
