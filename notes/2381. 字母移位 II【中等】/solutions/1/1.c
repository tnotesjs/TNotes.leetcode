char* shiftingLetters(char* s, int** shifts, int shiftsSize, int* shiftsColSize) {
    int n = strlen(s);
    int* diff = (int*)calloc(n + 1, sizeof(int));
    for (int i = 0; i < shiftsSize; i++) {
        int d = shifts[i][2] == 1 ? 1 : -1;
        diff[shifts[i][0]] += d;
        diff[shifts[i][1] + 1] -= d;
    }
    char* result = (char*)malloc(n + 1);
    int shift = 0;
    for (int i = 0; i < n; i++) {
        shift += diff[i];
        int c = ((s[i] - 'a' + shift % 26) + 26) % 26;
        result[i] = 'a' + c;
    }
    result[n] = '\0';
    free(diff);
    return result;
}
