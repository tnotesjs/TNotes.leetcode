int minimumRefills(int* plants, int plantsSize, int capacityA, int capacityB) {
    int a = capacityA, b = capacityB;
    int refills = 0;
    int left = 0, right = plantsSize - 1;
    while (left < right) {
        if (a < plants[left]) { refills++; a = capacityA; }
        a -= plants[left++];
        if (b < plants[right]) { refills++; b = capacityB; }
        b -= plants[right--];
    }
    if (left == right) {
        if (a >= b) {
            if (a < plants[left]) refills++;
        } else {
            if (b < plants[left]) refills++;
        }
    }
    return refills;
}
