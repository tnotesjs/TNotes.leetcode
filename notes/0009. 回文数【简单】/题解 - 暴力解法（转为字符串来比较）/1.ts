function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  return x.toString() === x.toString().split('').reverse().join('');
}
