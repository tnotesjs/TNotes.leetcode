bool carPooling(int** trips, int tripsSize, int* tripsColSize, int capacity) {
    int diff[1001] = {0};
    for (int i = 0; i < tripsSize; i++) {
        diff[trips[i][1]] += trips[i][0];
        diff[trips[i][2]] -= trips[i][0];
    }
    int cur = 0;
    for (int i = 0; i <= 1000; i++) {
        cur += diff[i];
        if (cur > capacity) return false;
    }
    return true;
}
