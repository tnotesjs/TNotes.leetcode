int reinitializePermutation(int n) {
  int pos = 1, steps = 0;
  do {
    if (pos % 2 == 0) pos = pos / 2;
    else pos = n / 2 + (pos - 1) / 2;
    steps++;
  } while (pos != 1);
  return steps;
}
