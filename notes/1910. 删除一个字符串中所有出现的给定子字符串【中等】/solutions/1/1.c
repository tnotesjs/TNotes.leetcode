#include <string.h>
#include <stdlib.h>

char* removeOccurrences(char* s, char* part) {
  int sLen = strlen(s), pLen = strlen(part);
  char* stack = (char*)malloc(sLen + 1);
  int top = 0;
  for (int i = 0; i < sLen; i++) {
    stack[top++] = s[i];
    if (top >= pLen && strncmp(stack + top - pLen, part, pLen) == 0) {
      top -= pLen;
    }
  }
  stack[top] = '\0';
  return stack;
}
