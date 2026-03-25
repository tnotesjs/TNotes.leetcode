bool* camelMatch(char** queries, int queriesSize, char* pattern, int* returnSize) {
    bool* res = malloc(queriesSize * sizeof(bool));
    *returnSize = queriesSize;
    int pLen = strlen(pattern);
    for (int i = 0; i < queriesSize; i++) {
        int j = 0;
        bool valid = true;
        for (int k = 0; queries[i][k]; k++) {
            char c = queries[i][k];
            if (j < pLen && c == pattern[j]) {
                j++;
            } else if (c >= 'A' && c <= 'Z') {
                valid = false;
                break;
            }
        }
        res[i] = valid && j == pLen;
    }
    return res;
}
