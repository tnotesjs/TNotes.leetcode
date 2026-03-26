long long gcd2001(long long a, long long b) {
    while (b) { long long t = b; b = a % b; a = t; }
    return a;
}

int cmp2001(const void* a, const void* b) {
    const long long* x = (const long long*)a;
    const long long* y = (const long long*)b;
    if (x[0] != y[0]) return x[0] < y[0] ? -1 : 1;
    return x[1] < y[1] ? -1 : x[1] > y[1] ? 1 : 0;
}

long long interchangeableRectangles(int** rectangles, int rectanglesSize, int* rectanglesColSize) {
    long long (*arr)[2] = malloc(rectanglesSize * sizeof(long long[2]));
    for (int i = 0; i < rectanglesSize; i++) {
        long long w = rectangles[i][0], h = rectangles[i][1];
        long long g = gcd2001(w, h);
        arr[i][0] = w / g;
        arr[i][1] = h / g;
    }
    qsort(arr, rectanglesSize, sizeof(long long[2]), cmp2001);
    long long count = 0;
    int i = 0;
    while (i < rectanglesSize) {
        int j = i;
        while (j < rectanglesSize && arr[j][0] == arr[i][0] && arr[j][1] == arr[i][1]) j++;
        long long k = j - i;
        count += k * (k - 1) / 2;
        i = j;
    }
    free(arr);
    return count;
}
