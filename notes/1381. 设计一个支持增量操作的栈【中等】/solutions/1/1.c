typedef struct {
    int* stack;
    int* inc;
    int size;
    int maxSize;
} CustomStack;

CustomStack* customStackCreate(int maxSize) {
    CustomStack* obj = malloc(sizeof(CustomStack));
    obj->stack = malloc(sizeof(int) * maxSize);
    obj->inc = calloc(maxSize, sizeof(int));
    obj->size = 0;
    obj->maxSize = maxSize;
    return obj;
}

void customStackPush(CustomStack* obj, int x) {
    if (obj->size < obj->maxSize) obj->stack[obj->size++] = x;
}

int customStackPop(CustomStack* obj) {
    if (obj->size == 0) return -1;
    int i = --obj->size;
    int val = obj->stack[i] + obj->inc[i];
    if (i > 0) obj->inc[i - 1] += obj->inc[i];
    obj->inc[i] = 0;
    return val;
}

void customStackIncrement(CustomStack* obj, int k, int val) {
    int idx = (k < obj->size ? k : obj->size) - 1;
    if (idx >= 0) obj->inc[idx] += val;
}

void customStackFree(CustomStack* obj) {
    free(obj->stack); free(obj->inc); free(obj);
}
