int videoStitching(int** clips, int clipsSize, int* clipsColSize, int time) {
    int* maxEnd = calloc(time + 1, sizeof(int));
    for (int i = 0; i < clipsSize; i++) {
        int s = clips[i][0], e = clips[i][1];
        if (s <= time && e > maxEnd[s]) maxEnd[s] = e;
    }
    int count = 0, curEnd = 0, farthest = 0;
    for (int i = 0; i < time; i++) {
        if (maxEnd[i] > farthest) farthest = maxEnd[i];
        if (i == curEnd) {
            if (farthest == curEnd) { free(maxEnd); return -1; }
            count++;
            curEnd = farthest;
        }
    }
    free(maxEnd);
    return count;
}
