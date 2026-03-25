int getLastMoment(int n, int* left, int leftSize, int* right, int rightSize) {
    int res = 0;
    for (int i = 0; i < leftSize; i++)
        if (left[i] > res) res = left[i];
    for (int i = 0; i < rightSize; i++)
        if (n - right[i] > res) res = n - right[i];
    return res;
}
