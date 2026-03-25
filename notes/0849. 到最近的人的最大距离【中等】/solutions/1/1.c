int maxDistToClosest(int* seats, int seatsSize) {
    int res = 0, last = -1;
    for (int i = 0; i < seatsSize; i++) {
        if (seats[i] == 1) {
            if (last == -1) res = i;
            else { int d = (i - last) / 2; if (d > res) res = d; }
            last = i;
        }
    }
    int d = seatsSize - 1 - last;
    if (d > res) res = d;
    return res;
}
