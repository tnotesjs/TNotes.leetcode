int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

bool validSquare(int* p1, int p1Size, int* p2, int p2Size, int* p3, int p3Size, int* p4, int p4Size) {
    int dist(int* a, int* b) {
        return (a[0]-b[0])*(a[0]-b[0]) + (a[1]-b[1])*(a[1]-b[1]);
    }
    int d[6] = {
        dist(p1,p2), dist(p1,p3), dist(p1,p4),
        dist(p2,p3), dist(p2,p4), dist(p3,p4)
    };
    qsort(d, 6, sizeof(int), cmp);
    return d[0] > 0 && d[0] == d[1] && d[1] == d[2] && d[2] == d[3] && d[4] == d[5];
}
