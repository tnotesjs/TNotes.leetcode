char* pushDominoes(char* dominoes) {
    int n = strlen(dominoes);
    int* forces = (int*)calloc(n, sizeof(int));
    int f = 0;
    for (int i = 0; i < n; i++) {
        if (dominoes[i] == 'R') f = n;
        else if (dominoes[i] == 'L') f = 0;
        else f = f > 0 ? f - 1 : 0;
        forces[i] += f;
    }
    f = 0;
    for (int i = n - 1; i >= 0; i--) {
        if (dominoes[i] == 'L') f = n;
        else if (dominoes[i] == 'R') f = 0;
        else f = f > 0 ? f - 1 : 0;
        forces[i] -= f;
    }
    char* res = (char*)malloc(n + 1);
    for (int i = 0; i < n; i++)
        res[i] = forces[i] > 0 ? 'R' : forces[i] < 0 ? 'L' : '.';
    res[n] = '\0';
    free(forces);
    return res;
}
