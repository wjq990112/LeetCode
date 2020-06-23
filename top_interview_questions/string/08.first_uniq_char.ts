/**
 * @file 字符串: 字符串中的第一个唯一字符
 */
export default function firstUniqChar(s: string): number {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let count = map.get(s[i]) || 0;
    map.set(s[i], count + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }
  return -1;
}
