double averageWaitingTime(int** customers, int customersSize, int* customersColSize) {
    long long cur = 0;
    double total = 0;
    for (int i = 0; i < customersSize; i++) {
        int arrival = customers[i][0], time = customers[i][1];
        cur = (cur > arrival ? cur : arrival) + time;
        total += cur - arrival;
    }
    return total / customersSize;
}
