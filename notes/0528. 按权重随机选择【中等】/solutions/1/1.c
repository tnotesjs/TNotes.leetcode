typedef struct {
    int* prefix;
    int size;
    int total;
} Solution;

Solution* solutionCreate(int* w, int wSize) {
    Solution* obj = (Solution*)malloc(sizeof(Solution));
    obj->prefix = (int*)malloc(sizeof(int) * wSize);
    obj->size = wSize;
    int sum = 0;
    for (int i = 0; i < wSize; i++) { sum += w[i]; obj->prefix[i] = sum; }
    obj->total = sum;
    return obj;
}

int solutionPickIndex(Solution* obj) {
    int target = rand() % obj->total + 1;
    int lo = 0, hi = obj->size - 1;
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (obj->prefix[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}

void solutionFree(Solution* obj) { free(obj->prefix); free(obj); }
