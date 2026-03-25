int* maxDepthAfterSplit(char* seq, int* returnSize) {
    int len = strlen(seq);
    int* res = malloc(len * sizeof(int));
    *returnSize = len;
    int depth = 0;
    for (int i = 0; i < len; i++) {
        if (seq[i] == '(') {
            depth++;
            res[i] = depth & 1;
        } else {
            res[i] = depth & 1;
            depth--;
        }
    }
    return res;
}
