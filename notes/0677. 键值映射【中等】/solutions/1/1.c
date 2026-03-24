#define MAX_KEYS 50

typedef struct {
    char keys[MAX_KEYS][51];
    int vals[MAX_KEYS];
    int size;
} MapSum;

MapSum* mapSumCreate() {
    MapSum* obj = (MapSum*)calloc(1, sizeof(MapSum));
    return obj;
}

void mapSumInsert(MapSum* obj, char* key, int val) {
    for (int i = 0; i < obj->size; i++) {
        if (strcmp(obj->keys[i], key) == 0) {
            obj->vals[i] = val;
            return;
        }
    }
    strcpy(obj->keys[obj->size], key);
    obj->vals[obj->size] = val;
    obj->size++;
}

int mapSumSum(MapSum* obj, char* prefix) {
    int total = 0, pLen = strlen(prefix);
    for (int i = 0; i < obj->size; i++) {
        if (strncmp(obj->keys[i], prefix, pLen) == 0)
            total += obj->vals[i];
    }
    return total;
}

void mapSumFree(MapSum* obj) {
    free(obj);
}
