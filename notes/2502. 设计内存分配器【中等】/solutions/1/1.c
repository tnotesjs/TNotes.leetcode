typedef struct {
    int *mem;
    int size;
} Allocator;

Allocator* allocatorCreate(int n) {
    Allocator *obj = (Allocator *)malloc(sizeof(Allocator));
    obj->mem = (int *)calloc(n, sizeof(int));
    obj->size = n;
    return obj;
}

int allocatorAllocate(Allocator* obj, int size, int mID) {
    int count = 0;
    for (int i = 0; i < obj->size; i++) {
        if (obj->mem[i] == 0) {
            count++;
            if (count == size) {
                for (int j = i - size + 1; j <= i; j++) obj->mem[j] = mID;
                return i - size + 1;
            }
        } else {
            count = 0;
        }
    }
    return -1;
}

int allocatorFreeMemory(Allocator* obj, int mID) {
    int count = 0;
    for (int i = 0; i < obj->size; i++) {
        if (obj->mem[i] == mID) {
            obj->mem[i] = 0;
            count++;
        }
    }
    return count;
}

void allocatorFree(Allocator* obj) {
    free(obj->mem);
    free(obj);
}
