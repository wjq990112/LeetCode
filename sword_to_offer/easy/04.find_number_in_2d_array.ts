/**
 * @file 面试题04. 二维数组中的查找
 */
export default function findNumberIn2DArray(
  matrix: number[][],
  target: number
): boolean {
  let len = matrix.length;

  if (!len) {
    return false;
  }

  let x = 0;
  let y = len - 1;

  while (x < matrix[0].length && y > -1) {
    if (matrix[y][x] > target) {
      y--;
    } else if (matrix[y][x] < target) {
      x++;
    } else {
      return true;
    }
  }

  return false;
}
