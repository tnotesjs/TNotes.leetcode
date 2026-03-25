int maximumScore(int a, int b, int c) {
    int arr[3] = {a, b, c};
    for (int i = 0; i < 2; i++)
        for (int j = i+1; j < 3; j++)
            if (arr[i] > arr[j]) { int t = arr[i]; arr[i] = arr[j]; arr[j] = t; }
    if (arr[0] + arr[1] <= arr[2]) return arr[0] + arr[1];
    return (a + b + c) / 2;
}
