import { binarySearch } from './index';

test('NUMBER: return -1 once the key does not exist', () => {
  const key = 20;
  const arrayNumber = [10, 30, 40, 50, 60];

  const result = binarySearch<number>(key, arrayNumber);

  expect(result).toBe(-1);
});

test('NUMBER: return key index when key present in left half', () => {
  const key = 20;
  const arrayNumber = [10, 20, 40, 15, 50, 60];

  const result = binarySearch<number>(key, arrayNumber);

  expect(result).toBe(1);
});

test('NUMBER: return key index when key present in right helf', () => {
  const key = 20;
  const arrayNumber = [10, 100, 40, 15, 50, 20];

  const result = binarySearch<number>(key, arrayNumber);

  expect(result).toBe(5);
});

test('STRING: return -1 once the key does not exist', () => {
  const key = 'Nodejs';
  const arrayString = ['JAVA', 'C#', 'Swift', 'Dart'];

  const result = binarySearch<string>(key, arrayString);

  expect(result).toBe(-1);
});

test('STRING: return key index', () => {
  const key = 'Dart';
  const arrayString = ['JAVA', 'C#', 'Swift', 'Dart'];

  const result = binarySearch<string>(key, arrayString);

  expect(result).toBe(3);
});
