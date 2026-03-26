int cmp2126(const void* a, const void* b) {
    return (*(int*)a > *(int*)b) - (*(int*)a < *(int*)b);
}

bool asteroidsDestroyed(int mass, int* asteroids, int asteroidsSize) {
    qsort(asteroids, asteroidsSize, sizeof(int), cmp2126);
    long long m = mass;
    for (int i = 0; i < asteroidsSize; i++) {
        if (m < asteroids[i]) return false;
        m += asteroids[i];
    }
    return true;
}
