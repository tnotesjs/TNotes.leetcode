#include <stdbool.h>
#include <string.h>

bool sumGame(char* num) {
  int n = strlen(num), half = n / 2;
  int diff = 0, questions = 0;
  for (int i = 0; i < half; i++) {
    if (num[i] == '?') questions++;
    else diff += num[i] - '0';
  }
  for (int i = half; i < n; i++) {
    if (num[i] == '?') questions--;
    else diff -= num[i] - '0';
  }
  return diff * 2 + questions * 9 != 0;
}
