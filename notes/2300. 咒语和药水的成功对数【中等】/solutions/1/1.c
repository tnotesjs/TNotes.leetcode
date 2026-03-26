int cmp2300(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* successfulPairs(int* spells, int spellsSize, int* potions, int potionsSize, long long success, int* returnSize) {
    qsort(potions, potionsSize, sizeof(int), cmp2300);
    int* res = (int*)malloc(spellsSize * sizeof(int));
    *returnSize = spellsSize;
    for (int i = 0; i < spellsSize; i++) {
        int lo = 0, hi = potionsSize;
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if ((long long)potions[mid] * spells[i] >= success) hi = mid;
            else lo = mid + 1;
        }
        res[i] = potionsSize - lo;
    }
    return res;
}
