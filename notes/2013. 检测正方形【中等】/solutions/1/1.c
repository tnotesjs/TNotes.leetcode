typedef struct {
    int cnt[1001][1001];
    int pts[3001][2];
    int ptsSize;
} DetectSquares;

DetectSquares* detectSquaresCreate() {
    DetectSquares* obj = (DetectSquares*)calloc(1, sizeof(DetectSquares));
    return obj;
}

void detectSquaresAdd(DetectSquares* obj, int* point, int pointSize) {
    obj->cnt[point[0]][point[1]]++;
    obj->pts[obj->ptsSize][0] = point[0];
    obj->pts[obj->ptsSize][1] = point[1];
    obj->ptsSize++;
}

int detectSquaresCount(DetectSquares* obj, int* point, int pointSize) {
    int x1 = point[0], y1 = point[1], ans = 0;
    for (int i = 0; i < obj->ptsSize; i++) {
        int x3 = obj->pts[i][0], y3 = obj->pts[i][1];
        if (abs(x3 - x1) != abs(y3 - y1) || x3 == x1) continue;
        ans += obj->cnt[x1][y3] * obj->cnt[x3][y1];
    }
    return ans;
}

void detectSquaresFree(DetectSquares* obj) {
    free(obj);
}
