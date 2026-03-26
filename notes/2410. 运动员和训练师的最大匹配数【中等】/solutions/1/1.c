int cmp2410(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int matchPlayersAndTrainers(int* players, int playersSize, int* trainers, int trainersSize) {
    qsort(players, playersSize, sizeof(int), cmp2410);
    qsort(trainers, trainersSize, sizeof(int), cmp2410);
    int i = 0, j = 0, count = 0;
    while (i < playersSize && j < trainersSize) {
        if (players[i] <= trainers[j]) {
            count++;
            i++;
        }
        j++;
    }
    return count;
}
