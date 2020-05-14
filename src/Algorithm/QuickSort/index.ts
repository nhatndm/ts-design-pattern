/**
 * @author Sin Nguyen
 * @email nhatndm1193@gmai.com
 * @create date 2020-05-14 02:36:22
 * @modify date 2020-05-14 02:36:22
 * @desc Quick Sort Implementation
 */

export function quickSort<T>(arr: T[]): T[] {
  let less: T[] = [];
  let greater: T[] = [];
  let i: number = 0;
  const equal: T[] = [];
  const arrLength = arr.length;

  if (arrLength <= 1) return arr;

  const tempNumber = arr[0];

  while (i < arr.length) {
    if (arr[i] < tempNumber) {
      less.push(arr[i]);
    }

    if (arr[i] > tempNumber) {
      greater.push(arr[i]);
    }

    if (arr[i] === tempNumber) {
      equal.push(arr[i]);
    }

    i++;
  }

  less = quickSort<T>(less);
  greater = quickSort<T>(greater);

  return [...less, ...equal, ...greater];
}
