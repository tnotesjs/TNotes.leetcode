int cmp(const void* a, const void* b) {
    double* pa = (double*)a, *pb = (double*)b;
    return pb[0] > pa[0] ? 1 : -1;
}

int carFleet(int target, int* position, int positionSize, int* speed, int speedSize) {
    int n = positionSize;
    double (*cars)[2] = malloc(sizeof(double[2]) * n);
    for (int i = 0; i < n; i++) {
        cars[i][0] = position[i];
        cars[i][1] = (double)(target - position[i]) / speed[i];
    }
    qsort(cars, n, sizeof(double[2]), cmp);
    int fleets = 0;
    double maxTime = 0;
    for (int i = 0; i < n; i++) {
        if (cars[i][1] > maxTime) { fleets++; maxTime = cars[i][1]; }
    }
    free(cars);
    return fleets;
}
