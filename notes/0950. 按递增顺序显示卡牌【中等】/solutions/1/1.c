int cmpDeck(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int* deckRevealedIncreasing(int* deck, int deckSize, int* returnSize) {
    *returnSize = deckSize;
    qsort(deck, deckSize, sizeof(int), cmpDeck);

    int* result = malloc(deckSize * sizeof(int));
    int* queue = malloc(deckSize * sizeof(int));
    int front = 0, rear = 0;

    for (int i = 0; i < deckSize; i++) queue[rear++] = i;

    for (int i = 0; i < deckSize; i++) {
        result[queue[front++]] = deck[i];
        if (front < rear) {
            queue[rear++] = queue[front++];
        }
    }

    free(queue);
    return result;
}
