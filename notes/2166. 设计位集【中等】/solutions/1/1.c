typedef struct {
    char* arr;
    int size;
    int ones;
    int flipped;
} Bitset;

Bitset* bitsetCreate(int size) {
    Bitset* obj = (Bitset*)malloc(sizeof(Bitset));
    obj->arr = (char*)calloc(size, sizeof(char));
    obj->size = size;
    obj->ones = 0;
    obj->flipped = 0;
    return obj;
}

void bitsetFix(Bitset* obj, int idx) {
    if (obj->flipped) {
        if (obj->arr[idx] == 1) { obj->arr[idx] = 0; obj->ones++; }
    } else {
        if (obj->arr[idx] == 0) { obj->arr[idx] = 1; obj->ones++; }
    }
}

void bitsetUnfix(Bitset* obj, int idx) {
    if (obj->flipped) {
        if (obj->arr[idx] == 0) { obj->arr[idx] = 1; obj->ones--; }
    } else {
        if (obj->arr[idx] == 1) { obj->arr[idx] = 0; obj->ones--; }
    }
}

void bitsetFlip(Bitset* obj) {
    obj->flipped = !obj->flipped;
    obj->ones = obj->size - obj->ones;
}

bool bitsetAll(Bitset* obj) {
    return obj->ones == obj->size;
}

bool bitsetOne(Bitset* obj) {
    return obj->ones > 0;
}

int bitsetCount(Bitset* obj) {
    return obj->ones;
}

char* bitsetToString(Bitset* obj) {
    char* res = (char*)malloc(obj->size + 1);
    for (int i = 0; i < obj->size; i++) {
        res[i] = obj->flipped ? ('0' + (1 - obj->arr[i])) : ('0' + obj->arr[i]);
    }
    res[obj->size] = '\0';
    return res;
}

void bitsetFree(Bitset* obj) {
    free(obj->arr);
    free(obj);
}
