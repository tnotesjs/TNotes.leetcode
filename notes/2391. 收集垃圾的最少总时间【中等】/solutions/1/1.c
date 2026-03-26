int garbageCollection(char** garbage, int garbageSize, int* travel, int travelSize) {
    int total = 0;
    int lastM = 0, lastP = 0, lastG = 0;
    for (int i = 0; i < garbageSize; i++) {
        int len = strlen(garbage[i]);
        total += len;
        for (int j = 0; j < len; j++) {
            if (garbage[i][j] == 'M') lastM = i;
            else if (garbage[i][j] == 'P') lastP = i;
            else lastG = i;
        }
    }
    int* prefix = (int*)calloc(garbageSize, sizeof(int));
    for (int i = 1; i < garbageSize; i++) {
        prefix[i] = prefix[i - 1] + travel[i - 1];
    }
    total += prefix[lastM] + prefix[lastP] + prefix[lastG];
    free(prefix);
    return total;
}
