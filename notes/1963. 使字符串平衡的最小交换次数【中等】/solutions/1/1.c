int minSwaps(char* s) {
  int open = 0, maxClose = 0;
  for (int i = 0; s[i]; i++) {
    if (s[i] == '[') open++; else open--;
    if (-open > maxClose) maxClose = -open;
  }
  return (maxClose + 1) / 2;
}
