/**
 * @file 面试题12. 矩阵中的路径
 */
export default function exist(board: string[][], word: string): boolean {
  const wordLen = word.length;

  if (!wordLen) {
    return true;
  }

  const width = board[0]?.length;
  const height = board.length;

  if (!height) {
    return false;
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (dfs(board, word, x, y, width, height)) {
        return true;
      }
    }
  }

  return false;
}

function dfs(
  board: string[][],
  word: string,
  x: number,
  y: number,
  width: number,
  height: number
): boolean {
  if (!word) {
    return true;
  }

  // 判断是否越界 & 是否与目标字符相等
  if (x < 0 || x > width - 1 || y < 0 || y > height - 1) {
    return false;
  }

  if (board[y][x] !== word[0]) {
    return false;
  }

  let str = word.slice(1);
  // 已判断的字符不能重复判断 改为 "-" 避免重复判断
  let temp = board[y][x];
  board[y][x] = '-';

  // 上下左右任意一个字符满足
  let result =
    dfs(board, str, x, y - 1, width, height) ||
    dfs(board, str, x, y + 1, width, height) ||
    dfs(board, str, x - 1, y, width, height) ||
    dfs(board, str, x + 1, y, width, height);

  // 还原
  board[y][x] = temp;

  return result;
}
