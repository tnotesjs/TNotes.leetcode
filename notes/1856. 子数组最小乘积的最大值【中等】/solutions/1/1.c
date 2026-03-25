#include <stdlib.h>

#define MOD1856 1000000007

int maxSumMinProduct(int* nums, int numsSize) {
  int n = numsSize;
  long long* prefix = (long long*)calloc(n + 1, sizeof(long long));
  for (int i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];
  int* left = (int*)malloc(n * sizeof(int));
  int* right = (int*)malloc(n * sizeof(int));
  int* stack = (int*)malloc(n * sizeof(int));
  int top = 0;
  for (int i = 0; i < n; i++) {
    while (top > 0 && nums[stack[top - 1]] >= nums[i]) top--;
    left[i] = top > 0 ? stack[top - 1] + 1 : 0;
    stack[top++] = i;
  }
  top = 0;
  for (int i = n - 1; i >= 0; i--) {
    while (top > 0 && nums[stack[top - 1]] >= nums[i]) top--;
    right[i] = top > 0 ? stack[top - 1] - 1 : n - 1;
    stack[top++] = i;
  }
  long long ans = 0;
  for (int i = 0; i < n; i++) {
    long long sum = prefix[right[i] + 1] - prefix[left[i]];
    long long product = (long long)nums[i] * sum;
    if (product > ans) ans = product;
  }
  free(prefix); free(left); free(right); free(stack);
  return (int)(ans % MOD1856);
}
