typedef struct {
    int** rects;
    int rectsSize;
    int* prefix;
    int total;
} Solution;

Solution* solutionCreate(int** rects, int rectsSize, int* rectsColSize) {
    Solution* obj = (Solution*)malloc(sizeof(Solution));
    obj->rects = rects;
    obj->rectsSize = rectsSize;
    obj->prefix = (int*)malloc(sizeof(int) * rectsSize);
    int sum = 0;
    for (int i = 0; i < rectsSize; i++) {
        sum += (rects[i][2] - rects[i][0] + 1) * (rects[i][3] - rects[i][1] + 1);
        obj->prefix[i] = sum;
    }
    obj->total = sum;
    return obj;
}

int* solutionPick(Solution* obj, int* retSize) {
    *retSize = 2;
    int* res = (int*)malloc(sizeof(int) * 2);
    int target = rand() % obj->total + 1;
    int lo = 0, hi = obj->rectsSize - 1;
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (obj->prefix[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    int* r = obj->rects[lo];
    int w = r[2] - r[0] + 1;
    int offset = target - (lo > 0 ? obj->prefix[lo - 1] : 0) - 1;
    res[0] = r[0] + offset % w;
    res[1] = r[1] + offset / w;
    return res;
}

void solutionFree(Solution* obj) {
    free(obj->prefix);
    free(obj);
}
