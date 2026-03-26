struct HashEntry {
  int key;
  int count;
  UT_hash_handle hh;
};

long long countPalindromePaths(int* parent, int parentSize, char* s) {
  int n = parentSize;
  int* head = (int*)malloc(n * sizeof(int));
  int* nxt = (int*)malloc(n * sizeof(int));
  memset(head, -1, n * sizeof(int));
  for (int i = 1; i < n; i++) {
    nxt[i] = head[parent[i]];
    head[parent[i]] = i;
  }
  int* mask = (int*)calloc(n, sizeof(int));
  int* stk = (int*)malloc(n * sizeof(int));
  int top = 0;
  stk[top++] = 0;
  struct HashEntry* map = NULL;
  struct HashEntry* entry = (struct HashEntry*)malloc(sizeof(struct HashEntry));
  entry->key = 0;
  entry->count = 1;
  HASH_ADD_INT(map, key, entry);
  long long ans = 0;
  while (top > 0) {
    int u = stk[--top];
    struct HashEntry* found;
    HASH_FIND_INT(map, &mask[u], found);
    if (found) ans += found->count;
    for (int b = 0; b < 26; b++) {
      int target = mask[u] ^ (1 << b);
      HASH_FIND_INT(map, &target, found);
      if (found) ans += found->count;
    }
    HASH_FIND_INT(map, &mask[u], found);
    if (found) found->count++;
    else {
      entry = (struct HashEntry*)malloc(sizeof(struct HashEntry));
      entry->key = mask[u];
      entry->count = 1;
      HASH_ADD_INT(map, key, entry);
    }
    for (int c = head[u]; c != -1; c = nxt[c]) {
      mask[c] = mask[u] ^ (1 << (s[c] - 'a'));
      stk[top++] = c;
    }
  }
  free(head); free(nxt); free(mask); free(stk);
  return ans;
}
