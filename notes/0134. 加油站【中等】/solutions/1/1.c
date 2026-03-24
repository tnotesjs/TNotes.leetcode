int canCompleteCircuit(int* gas, int gasSize, int* cost, int costSize) {
    int totalTank = 0, curTank = 0, start = 0;
    for (int i = 0; i < gasSize; i++) {
        int diff = gas[i] - cost[i];
        totalTank += diff;
        curTank += diff;
        if (curTank < 0) {
            start = i + 1;
            curTank = 0;
        }
    }
    return totalTank >= 0 ? start : -1;
}
