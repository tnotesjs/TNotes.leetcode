int repeatedStringMatch(char* a, char* b) {
    int aLen = strlen(a), bLen = strlen(b);
    int count = 1;
    int rLen = aLen;
    char* repeated = (char*)malloc(aLen * (bLen / aLen + 3) + 1);
    strcpy(repeated, a);
    while (rLen < bLen) {
        strcat(repeated, a);
        rLen += aLen;
        count++;
    }
    if (strstr(repeated, b)) {
        free(repeated);
        return count;
    }
    strcat(repeated, a);
    count++;
    if (strstr(repeated, b)) {
        free(repeated);
        return count;
    }
    free(repeated);
    return -1;
}
