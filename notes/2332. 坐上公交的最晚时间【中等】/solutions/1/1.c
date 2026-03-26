int cmp2332(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int latestTimeCatchTheBus(int* buses, int busesSize, int* passengers, int passengersSize, int capacity) {
    qsort(buses, busesSize, sizeof(int), cmp2332);
    qsort(passengers, passengersSize, sizeof(int), cmp2332);
    int j = 0, space = 0;
    for (int i = 0; i < busesSize; i++) {
        space = capacity;
        while (space > 0 && j < passengersSize && passengers[j] <= buses[i]) {
            j++;
            space--;
        }
    }
    int res;
    if (space > 0) {
        res = buses[busesSize - 1];
    } else {
        res = passengers[j - 1];
    }
    // 二分查找是否在乘客中
    while (1) {
        int lo = 0, hi = passengersSize - 1, found = 0;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (passengers[mid] == res) { found = 1; break; }
            else if (passengers[mid] < res) lo = mid + 1;
            else hi = mid - 1;
        }
        if (!found) break;
        res--;
    }
    return res;
}
