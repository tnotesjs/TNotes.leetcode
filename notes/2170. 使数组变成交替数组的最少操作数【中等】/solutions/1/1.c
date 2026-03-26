typedef struct { int val; int cnt; } Pair2170;

int cmpPair2170(const void* a, const void* b) {
    return ((Pair2170*)b)->cnt - ((Pair2170*)a)->cnt;
}

void getTop2_2170(int* nums, int numsSize, int start, Pair2170 top[2]) {
    // 统计频率
    #define TSZ 50021
    int keys[TSZ], vals[TSZ], used[TSZ];
    memset(used, 0, sizeof(used));
    int uniqueCount = 0;
    Pair2170* pairs = (Pair2170*)malloc(sizeof(Pair2170) * numsSize);
    for (int i = start; i < numsSize; i += 2) {
        int h = ((unsigned)nums[i]) % TSZ;
        while (used[h] && keys[h] != nums[i]) h = (h + 1) % TSZ;
        if (!used[h]) { used[h] = 1; keys[h] = nums[i]; vals[h] = 0; }
        vals[h]++;
    }
    int pc = 0;
    for (int i = 0; i < TSZ; i++) {
        if (used[i]) { pairs[pc].val = keys[i]; pairs[pc].cnt = vals[i]; pc++; }
    }
    qsort(pairs, pc, sizeof(Pair2170), cmpPair2170);
    top[0] = (Pair2170){-1, 0};
    top[1] = (Pair2170){-1, 0};
    if (pc > 0) top[0] = pairs[0];
    if (pc > 1) top[1] = pairs[1];
    free(pairs);
}

int minimumOperations(int* nums, int numsSize) {
    Pair2170 evenTop[2], oddTop[2];
    getTop2_2170(nums, numsSize, 0, evenTop);
    getTop2_2170(nums, numsSize, 1, oddTop);
    int evenCount = (numsSize + 1) / 2;
    int oddCount = numsSize / 2;
    if (evenTop[0].val != oddTop[0].val) {
        return (evenCount - evenTop[0].cnt) + (oddCount - oddTop[0].cnt);
    }
    int opt1 = (evenCount - evenTop[0].cnt) + (oddCount - oddTop[1].cnt);
    int opt2 = (evenCount - evenTop[1].cnt) + (oddCount - oddTop[0].cnt);
    return opt1 < opt2 ? opt1 : opt2;
}
