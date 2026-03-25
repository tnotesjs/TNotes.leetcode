#include <stdbool.h>
#include <string.h>
#include <stdlib.h>

bool areSentencesSimilar(char* sentence1, char* sentence2) {
  // 拆分单词
  char* words1[200], *words2[200];
  int n1 = 0, n2 = 0;
  char* s1 = strdup(sentence1);
  char* s2 = strdup(sentence2);
  char* tok = strtok(s1, " ");
  while (tok) { words1[n1++] = tok; tok = strtok(NULL, " "); }
  tok = strtok(s2, " ");
  while (tok) { words2[n2++] = tok; tok = strtok(NULL, " "); }
  // 确保 n1 <= n2
  if (n1 > n2) {
    char** t = words1; words1 = words2; words2 = t;
    int tmp = n1; n1 = n2; n2 = tmp;
  }
  int i = 0, j = 0;
  while (i < n1 && strcmp(words1[i], words2[i]) == 0) i++;
  while (j < n1 - i && strcmp(words1[n1 - 1 - j], words2[n2 - 1 - j]) == 0) j++;
  free(s1); free(s2);
  return i + j >= n1;
}
