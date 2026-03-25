#include <string.h>
#include <stdlib.h>

char* maximumNumber(char* num, int* change, int changeSize) {
  int n = strlen(num);
  char* res = (char*)malloc(n + 1);
  strcpy(res, num);
  int started = 0;
  for (int i = 0; i < n; i++) {
    int d = res[i] - '0';
    if (change[d] > d) { res[i] = '0' + change[d]; started = 1; }
    else if (change[d] < d && started) break;
  }
  return res;
}
