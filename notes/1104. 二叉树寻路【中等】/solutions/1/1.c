int* pathInZigZagTree(int label, int* returnSize) {
    int level = 1;
    while ((1 << level) <= label) level++;
    *returnSize = level;
    int* res = malloc(level * sizeof(int));
    int idx = level - 1;
    while (label >= 1) {
        res[idx--] = label;
        int levelStart = 1 << (level - 1);
        int levelEnd = (1 << level) - 1;
        label = (levelStart + levelEnd - label) / 2;
        level--;
    }
    return res;
}
