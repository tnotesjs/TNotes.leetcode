typedef struct {
    int* encoding;
    int size;
    int idx;
} RLEIterator;

RLEIterator* rLEIteratorCreate(int* encoding, int encodingSize) {
    RLEIterator* obj = (RLEIterator*)malloc(sizeof(RLEIterator));
    obj->encoding = (int*)malloc(sizeof(int) * encodingSize);
    memcpy(obj->encoding, encoding, sizeof(int) * encodingSize);
    obj->size = encodingSize;
    obj->idx = 0;
    return obj;
}

int rLEIteratorNext(RLEIterator* obj, int n) {
    while (obj->idx < obj->size) {
        if (obj->encoding[obj->idx] >= n) {
            obj->encoding[obj->idx] -= n;
            return obj->encoding[obj->idx + 1];
        }
        n -= obj->encoding[obj->idx];
        obj->idx += 2;
    }
    return -1;
}

void rLEIteratorFree(RLEIterator* obj) { free(obj->encoding); free(obj); }
