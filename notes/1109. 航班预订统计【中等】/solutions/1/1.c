int* corpFlightBookings(int** bookings, int bookingsSize, int* bookingsColSize, int n, int* returnSize) {
    int* diff = calloc(n + 2, sizeof(int));
    for (int i = 0; i < bookingsSize; i++) {
        diff[bookings[i][0]] += bookings[i][2];
        diff[bookings[i][1] + 1] -= bookings[i][2];
    }
    int* res = malloc(n * sizeof(int));
    res[0] = diff[1];
    for (int i = 1; i < n; i++) {
        res[i] = res[i - 1] + diff[i + 1];
    }
    free(diff);
    *returnSize = n;
    return res;
}
