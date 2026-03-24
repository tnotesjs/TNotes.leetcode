typedef struct {
    double r, x, y;
} Solution;

Solution* solutionCreate(double radius, double x_center, double y_center) {
    Solution* obj = (Solution*)malloc(sizeof(Solution));
    obj->r = radius; obj->x = x_center; obj->y = y_center;
    return obj;
}

double* solutionRandPoint(Solution* obj, int* retSize) {
    *retSize = 2;
    double* res = (double*)malloc(sizeof(double) * 2);
    while (1) {
        double x = (double)rand() / RAND_MAX * 2 * obj->r - obj->r;
        double y = (double)rand() / RAND_MAX * 2 * obj->r - obj->r;
        if (x * x + y * y <= obj->r * obj->r) {
            res[0] = obj->x + x;
            res[1] = obj->y + y;
            return res;
        }
    }
}

void solutionFree(Solution* obj) { free(obj); }
