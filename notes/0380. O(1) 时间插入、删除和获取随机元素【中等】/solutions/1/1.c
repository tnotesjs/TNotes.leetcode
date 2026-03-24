#define CAP 100001

typedef struct {
    int* list;
    int size;
    int map[CAP * 2 + 1]; // offset for negative keys
    bool has[CAP * 2 + 1];
} RandomizedSet;

RandomizedSet* randomizedSetCreate() {
    RandomizedSet* obj = (RandomizedSet*)malloc(sizeof(RandomizedSet));
    obj->list = (int*)malloc(sizeof(int) * CAP);
    obj->size = 0;
    memset(obj->has, false, sizeof(obj->has));
    return obj;
}

bool randomizedSetInsert(RandomizedSet* obj, int val) {
    int key = val + CAP;
    if (obj->has[key]) return false;
    obj->has[key] = true;
    obj->map[key] = obj->size;
    obj->list[obj->size++] = val;
    return true;
}

bool randomizedSetRemove(RandomizedSet* obj, int val) {
    int key = val + CAP;
    if (!obj->has[key]) return false;
    int idx = obj->map[key];
    int last = obj->list[obj->size - 1];
    obj->list[idx] = last;
    obj->map[last + CAP] = idx;
    obj->size--;
    obj->has[key] = false;
    return true;
}

int randomizedSetGetRandom(RandomizedSet* obj) {
    return obj->list[rand() % obj->size];
}

void randomizedSetFree(RandomizedSet* obj) {
    free(obj->list); free(obj);
}
