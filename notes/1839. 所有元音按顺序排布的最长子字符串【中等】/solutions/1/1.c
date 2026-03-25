int longestBeautifulSubstring(char* word) {
  int ans = 0, count = 1, distinct = 1;
  for (int i = 1; word[i]; i++) {
    if (word[i] >= word[i - 1]) {
      count++;
      if (word[i] > word[i - 1]) distinct++;
    } else {
      count = 1;
      distinct = 1;
    }
    if (distinct == 5 && count > ans) ans = count;
  }
  return ans;
}
