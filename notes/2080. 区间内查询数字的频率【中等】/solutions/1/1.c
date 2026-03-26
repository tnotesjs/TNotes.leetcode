#define MAX_VAL 10001

typedef struct {
    int** idxs;
    int* sizes;
    int* caps;
} RangeFreqQuery;

RangeFreqQuery* rangeFreqQueryCreate(int* arr, int arrSize) {
    RangeFreqQuery* obj = (RangeFreqQuery*)malloc(sizeof(RangeFreqQuery));
    obj->idxs = (int**)calloc(MAX_VAL, sizeof(int*));
    obj->sizes = (int*)calloc(MAX_VAL, sizeof(int));
    obj->caps = (int*)calloc(MAX_VAL, sizeof(int));
    for (int i = 0; i < arrSize; i++) {
        int v = arr[i];
        if (obj->sizes[v] == obj->caps[v]) {
            obj->caps[v] = obj->caps[v] ? obj->caps[v] * 2 : 4;
            obj->idxs[v] = (int*)realloc(obj->idxs[v], obj->caps[v] * sizeof(int));
        }
        obj->idxs[v][obj->sizes[v]++] = i;
    }
    return obj;
}

int rangeFreqQueryQuery(RangeFreqQuery* obj, int left, int right, int value) {
    if (!obj->idxs[value]) return 0;
    int* arr = obj->idxs[value];
    int n = obj->sizes[value];
    int lo = 0, hi = n;
    while (lo < hi) { int mid = (lo + hi) / 2; if (arr[mid] < left) lo = mid + 1; else hi = mid; }
    int l = lo;
    lo = 0; hi = n;
    while (lo < hi) { int mid = (lo + hi) / 2; if (arr[mid] <= right) lo = mid + 1; else hi = mid; }
    return lo - l;
}

void rangeFreqQueryFree(RangeFreqQuery* obj) {
    for (int i = 0; i < MAX_VAL; i++) free(obj->idxs[i]);
    free(obj->idxs); free(obj->sizes); free(obj->caps); free(obj);
}
