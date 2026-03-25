int getWinner(int* arr, int arrSize, int k) {
    int current = arr[0], wins = 0;
    for (int i = 1; i < arrSize; i++) {
        if (arr[i] > current) {
            current = arr[i];
            wins = 1;
        } else {
            wins++;
        }
        if (wins == k) return current;
    }
    return current;
}
