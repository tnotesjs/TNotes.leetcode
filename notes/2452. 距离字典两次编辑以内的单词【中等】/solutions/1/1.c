/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** twoEditWords(char** queries, int queriesSize, char** dictionary, int dictionarySize, int* returnSize) {
    char **res = (char **)malloc(queriesSize * sizeof(char *));
    int cnt = 0;
    for (int i = 0; i < queriesSize; i++) {
        int len = strlen(queries[i]);
        for (int j = 0; j < dictionarySize; j++) {
            int diff = 0;
            for (int k = 0; k < len && diff <= 2; k++) {
                if (queries[i][k] != dictionary[j][k]) diff++;
            }
            if (diff <= 2) {
                res[cnt++] = queries[i];
                break;
            }
        }
    }
    *returnSize = cnt;
    return res;
}
