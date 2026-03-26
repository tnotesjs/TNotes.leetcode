struct Entry {
  int key;
  int* indices;
  int count;
  UT_hash_handle hh;
};

int minimumSeconds(int* nums, int numsSize) {
  struct Entry* map = NULL;
  for (int i = 0; i < numsSize; i++) {
    struct Entry* e;
    HASH_FIND_INT(map, &nums[i], e);
    if (!e) {
      e = (struct Entry*)malloc(sizeof(struct Entry));
      e->key = nums[i];
      e->indices = (int*)malloc(numsSize * sizeof(int));
      e->count = 0;
      HASH_ADD_INT(map, key, e);
    }
    e->indices[e->count++] = i;
  }
  int ans = numsSize;
  struct Entry* e, *tmp;
  HASH_ITER(hh, map, e, tmp) {
    int maxGap = e->indices[0] + numsSize - e->indices[e->count - 1];
    for (int i = 1; i < e->count; i++) {
      int gap = e->indices[i] - e->indices[i - 1];
      if (gap > maxGap) maxGap = gap;
    }
    int val = maxGap / 2;
    if (val < ans) ans = val;
  }
  return ans;
}
