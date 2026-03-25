char* findReplaceString(char* s, int* indices, int indicesSize, char** sources, int sourcesSize, char** targets, int targetsSize) {
    int order[indicesSize];
    for (int i = 0; i < indicesSize; i++) order[i] = i;
    for (int i = 0; i < indicesSize; i++)
        for (int j = i + 1; j < indicesSize; j++)
            if (indices[order[i]] < indices[order[j]]) { int t = order[i]; order[i] = order[j]; order[j] = t; }
    char* res = (char*)malloc(strlen(s) * 10 + 1000);
    strcpy(res, s);
    for (int k = 0; k < indicesSize; k++) {
        int i = order[k], idx = indices[i];
        int srcLen = strlen(sources[i]);
        if (strncmp(res + idx, sources[i], srcLen) == 0) {
            int tgtLen = strlen(targets[i]);
            int resLen = strlen(res);
            memmove(res + idx + tgtLen, res + idx + srcLen, resLen - idx - srcLen + 1);
            memcpy(res + idx, targets[i], tgtLen);
        }
    }
    return res;
}
