typedef struct {
    int *uploaded;
    int longest;
    int n;
} LUPrefix;

LUPrefix* lUPrefixCreate(int n) {
    LUPrefix *obj = (LUPrefix *)malloc(sizeof(LUPrefix));
    obj->uploaded = (int *)calloc(n + 2, sizeof(int));
    obj->longest = 0;
    obj->n = n;
    return obj;
}

void lUPrefixUpload(LUPrefix* obj, int video) {
    obj->uploaded[video] = 1;
    while (obj->uploaded[obj->longest + 1]) {
        obj->longest++;
    }
}

int lUPrefixLongest(LUPrefix* obj) {
    return obj->longest;
}

void lUPrefixFree(LUPrefix* obj) {
    free(obj->uploaded);
    free(obj);
}
