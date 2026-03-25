#include <string.h>

int minFlips(char* s) {
  int n = strlen(s);
  int diff0 = 0, diff1 = 0;
  for (int i = 0; i < n; i++) {
    int c = s[i] - '0';
    if (c != i % 2) diff0++;
    if (c != 1 - i % 2) diff1++;
  }
  int ans = diff0 < diff1 ? diff0 : diff1;
  for (int i = 0; i < n; i++) {
    int c = s[i] - '0';
    // 加入新元素 s[i] 在位置 n+i
    if (c != (n + i) % 2) diff0++;
    if (c != 1 - (n + i) % 2) diff1++;
    // 移除旧元素 s[i] 在位置 i
    if (c != i % 2) diff0--;
    if (c != 1 - i % 2) diff1--;
    int m = diff0 < diff1 ? diff0 : diff1;
    if (m < ans) ans = m;
  }
  return ans;
}
