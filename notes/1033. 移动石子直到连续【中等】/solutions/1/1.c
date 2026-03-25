int* numMovesStones(int a, int b, int c, int* returnSize) {
    int arr[3] = {a, b, c};
    for (int i = 0; i < 2; i++)
        for (int j = i + 1; j < 3; j++)
            if (arr[i] > arr[j]) { int t = arr[i]; arr[i] = arr[j]; arr[j] = t; }
    int x = arr[0], y = arr[1], z = arr[2];
    int* res = malloc(2 * sizeof(int));
    *returnSize = 2;
    if (z - x == 2) { res[0] = 0; res[1] = 0; }
    else {
        res[0] = (y - x <= 2 || z - y <= 2) ? 1 : 2;
        res[1] = z - x - 2;
    }
    return res;
}
