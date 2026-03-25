typedef struct {
    char** combos;
    int size;
    int idx;
} CombinationIterator;

void generate(CombinationIterator* obj, char* chars, int n, int len, int start, char* path, int depth) {
    if (depth == len) {
        obj->combos[obj->size] = malloc(sizeof(char) * (len + 1));
        memcpy(obj->combos[obj->size], path, len);
        obj->combos[obj->size][len] = '\0';
        obj->size++;
        return;
    }
    for (int i = start; i < n; i++) {
        path[depth] = chars[i];
        generate(obj, chars, n, len, i + 1, path, depth + 1);
    }
}

CombinationIterator* combinationIteratorCreate(char* characters, int combinationLength) {
    CombinationIterator* obj = malloc(sizeof(CombinationIterator));
    obj->combos = malloc(sizeof(char*) * 32768);
    obj->size = 0;
    obj->idx = 0;
    char* path = malloc(sizeof(char) * (combinationLength + 1));
    generate(obj, characters, strlen(characters), combinationLength, 0, path, 0);
    free(path);
    return obj;
}

char* combinationIteratorNext(CombinationIterator* obj) {
    return obj->combos[obj->idx++];
}

bool combinationIteratorHasNext(CombinationIterator* obj) {
    return obj->idx < obj->size;
}

void combinationIteratorFree(CombinationIterator* obj) {
    for (int i = 0; i < obj->size; i++) free(obj->combos[i]);
    free(obj->combos);
    free(obj);
}
