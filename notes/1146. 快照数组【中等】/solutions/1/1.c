typedef struct {
    int* snapIds;
    int* vals;
    int size;
    int cap;
} Entry;

typedef struct {
    Entry* data;
    int length;
    int snapId;
} SnapshotArray;

SnapshotArray* snapshotArrayCreate(int length) {
    SnapshotArray* obj = (SnapshotArray*)malloc(sizeof(SnapshotArray));
    obj->length = length;
    obj->snapId = 0;
    obj->data = (Entry*)malloc(sizeof(Entry) * length);
    for (int i = 0; i < length; i++) {
        obj->data[i].cap = 4;
        obj->data[i].size = 1;
        obj->data[i].snapIds = (int*)malloc(sizeof(int) * 4);
        obj->data[i].vals = (int*)malloc(sizeof(int) * 4);
        obj->data[i].snapIds[0] = 0;
        obj->data[i].vals[0] = 0;
    }
    return obj;
}

void snapshotArraySet(SnapshotArray* obj, int index, int val) {
    Entry* e = &obj->data[index];
    if (e->snapIds[e->size - 1] == obj->snapId) {
        e->vals[e->size - 1] = val;
    } else {
        if (e->size == e->cap) {
            e->cap *= 2;
            e->snapIds = (int*)realloc(e->snapIds, sizeof(int) * e->cap);
            e->vals = (int*)realloc(e->vals, sizeof(int) * e->cap);
        }
        e->snapIds[e->size] = obj->snapId;
        e->vals[e->size] = val;
        e->size++;
    }
}

int snapshotArraySnap(SnapshotArray* obj) {
    return obj->snapId++;
}

int snapshotArrayGet(SnapshotArray* obj, int index, int snap_id) {
    Entry* e = &obj->data[index];
    int lo = 0, hi = e->size - 1;
    while (lo < hi) {
        int mid = (lo + hi + 1) / 2;
        if (e->snapIds[mid] <= snap_id) lo = mid;
        else hi = mid - 1;
    }
    return e->vals[lo];
}

void snapshotArrayFree(SnapshotArray* obj) {
    for (int i = 0; i < obj->length; i++) {
        free(obj->data[i].snapIds);
        free(obj->data[i].vals);
    }
    free(obj->data);
    free(obj);
}
