#include <stdlib.h>
#include <string.h>

typedef struct KV1807 { char* key; char* val; struct KV1807* next; } KV1807;

char* evaluate(char* s, char*** knowledge, int knowledgeSize, int* knowledgeColSize) {
  // 哈希表
  int buckets = 10007;
  KV1807** ht = (KV1807**)calloc(buckets, sizeof(KV1807*));
  for (int i = 0; i < knowledgeSize; i++) {
    unsigned h = 0;
    for (char* c = knowledge[i][0]; *c; c++) h = h * 31 + *c;
    h %= buckets;
    KV1807* node = (KV1807*)malloc(sizeof(KV1807));
    node->key = knowledge[i][0];
    node->val = knowledge[i][1];
    node->next = ht[h];
    ht[h] = node;
  }
  int slen = strlen(s);
  char* res = (char*)malloc(slen * 100 + 1);
  int ri = 0;
  for (int i = 0; i < slen; ) {
    if (s[i] == '(') {
      int j = i + 1;
      while (s[j] != ')') j++;
      int klen = j - i - 1;
      char key[klen + 1];
      memcpy(key, s + i + 1, klen);
      key[klen] = '\0';
      unsigned h = 0;
      for (int k = 0; k < klen; k++) h = h * 31 + key[k];
      h %= buckets;
      char* val = "?";
      for (KV1807* node = ht[h]; node; node = node->next) {
        if (strcmp(node->key, key) == 0) { val = node->val; break; }
      }
      int vlen = strlen(val);
      memcpy(res + ri, val, vlen);
      ri += vlen;
      i = j + 1;
    } else {
      res[ri++] = s[i++];
    }
  }
  res[ri] = '\0';
  // 释放哈希表
  for (int i = 0; i < buckets; i++) {
    KV1807* node = ht[i];
    while (node) { KV1807* t = node; node = node->next; free(t); }
  }
  free(ht);
  return res;
}
