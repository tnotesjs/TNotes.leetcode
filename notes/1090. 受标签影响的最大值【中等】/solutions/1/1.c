int cmp(const void* a, const void* b) {
    return ((int*)b)[0] - ((int*)a)[0];
}

int largestValsFromLabels(int* values, int valuesSize, int* labels, int labelsSize, int numWanted, int useLimit) {
    int pairs[valuesSize][2];
    for (int i = 0; i < valuesSize; i++) {
        pairs[i][0] = values[i];
        pairs[i][1] = labels[i];
    }
    qsort(pairs, valuesSize, sizeof(int[2]), cmp);
    int labelCount[20001] = {0};
    int res = 0, count = 0;
    for (int i = 0; i < valuesSize && count < numWanted; i++) {
        int label = pairs[i][1];
        if (labelCount[label] >= useLimit) continue;
        res += pairs[i][0];
        labelCount[label]++;
        count++;
    }
    return res;
}
