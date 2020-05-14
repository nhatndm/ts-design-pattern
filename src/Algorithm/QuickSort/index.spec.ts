import { quickSort } from './index';

test('return one element if array has one element', () => {
  const arrayNumber = [10];

  const result = quickSort<number>(arrayNumber);

  expect(result[0]).toBe(arrayNumber[0]);
});

test('return array if array has one element', () => {
  const arrayNumber = [10];

  const result = quickSort<number>(arrayNumber);

  expect(result.length).toBe(arrayNumber.length);
});

test('return length of array sorted', () => {
  const arrayNumber = [10, 2, 5, 19, 2, 12, 1, 100, 344, 22];

  const result = quickSort<number>(arrayNumber);

  expect(result.length).toBe(arrayNumber.length);
});

test('return minimum number', () => {
  const arrayNumber = [10, 2, 5, 19, 2, 12, 1, 100, 344, 22];

  const result = quickSort<number>(arrayNumber);

  expect(result[0]).toBe(1);
});

test('return maximum number', () => {
  const arrayNumber = [10, 2, 5, 19, 2, 12, 1, 100, 344, 22];

  const result = quickSort<number>(arrayNumber);

  expect(result[result.length - 1]).toBe(344);
});

test('return one element if array has one element', () => {
  const arrayString = ['Testing 1'];

  const result = quickSort<string>(arrayString);

  expect(result[0]).toBe(arrayString[0]);
});

test('return array string if array has one element', () => {
  const arrayString = ['Testing 1'];

  const result = quickSort<string>(arrayString);

  expect(result.length).toBe(arrayString.length);
});

test('return length of array sorted', () => {
  const arrayString = ['Testing 1', 'Testing 2', 'Testing 3', 'Nhat'];

  const result = quickSort<string>(arrayString);

  expect(result.length).toBe(arrayString.length);
});

test('return array sorted', () => {
  const arrayString = ['Testing 1', 'Testing 2', 'Testing 3', 'Nhat'];

  const result = quickSort<string>(arrayString);

  expect(result[0]).toBe('Nhat');
});
