#include <stdlib.h>
#include <string.h>

char* maxValue(char* n, int x) {
  int len = strlen(n);
  char* res = (char*)malloc(len + 2);
  char xc = '0' + x;
  int pos = len;
  if (n[0] == '-') {
    for (int i = 1; i < len; i++) {
      if (n[i] > xc) { pos = i; break; }
    }
  } else {
    for (int i = 0; i < len; i++) {
      if (n[i] < xc) { pos = i; break; }
    }
  }
  memcpy(res, n, pos);
  res[pos] = xc;
  memcpy(res + pos + 1, n + pos, len - pos);
  res[len + 1] = '\0';
  return res;
}
