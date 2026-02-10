/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* sumZero(int n, int* returnSize) {
  *returnSize = n;
  int* res = (int*)malloc(n * sizeof(int));
  int idx = 0;

  for (int i = 1; i <= n / 2; i++) {
    res[idx++] = i;
    res[idx++] = -i;
  }

  if (n % 2 == 1) {
    res[idx] = 0;
  }

  return res;
}
