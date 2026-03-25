int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int numRescueBoats(int* people, int peopleSize, int limit) {
    qsort(people, peopleSize, sizeof(int), cmp);
    int lo = 0, hi = peopleSize - 1, boats = 0;
    while (lo <= hi) {
        if (people[lo] + people[hi] <= limit) lo++;
        hi--;
        boats++;
    }
    return boats;
}
