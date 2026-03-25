int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

bool isNStraightHand(int* hand, int handSize, int groupSize) {
    if (handSize % groupSize != 0) return false;
    qsort(hand, handSize, sizeof(int), cmp);
    int* vals = (int*)malloc(sizeof(int) * handSize);
    int* cnts = (int*)malloc(sizeof(int) * handSize);
    int m = 0;
    for (int i = 0; i < handSize; i++) {
        if (m > 0 && vals[m-1] == hand[i]) cnts[m-1]++;
        else { vals[m] = hand[i]; cnts[m] = 1; m++; }
    }
    for (int i = 0; i < m; i++) {
        if (cnts[i] == 0) continue;
        int c = cnts[i];
        for (int j = 0; j < groupSize; j++) {
            if (i + j >= m || vals[i+j] != vals[i] + j || cnts[i+j] < c) {
                free(vals); free(cnts); return false;
            }
            cnts[i+j] -= c;
        }
    }
    free(vals); free(cnts);
    return true;
}
