long long minimumTime(int* time, int timeSize, int totalTrips) {
    long long lo = 1;
    long long minTime = time[0];
    for (int i = 1; i < timeSize; i++)
        if (time[i] < minTime) minTime = time[i];
    long long hi = minTime * totalTrips;
    while (lo < hi) {
        long long mid = lo + (hi - lo) / 2;
        long long trips = 0;
        for (int i = 0; i < timeSize; i++) trips += mid / time[i];
        if (trips >= totalTrips) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
