typedef struct {
    char** arr;
    int size;
    int ptr;
} OrderedStream;

OrderedStream* orderedStreamCreate(int n) {
    OrderedStream* obj = (OrderedStream*)malloc(sizeof(OrderedStream));
    obj->arr = (char**)calloc(n, sizeof(char*));
    obj->size = n;
    obj->ptr = 1;
    return obj;
}

char** orderedStreamInsert(OrderedStream* obj, int idKey, char* value, int* retSize) {
    obj->arr[idKey - 1] = value;

    if (idKey != obj->ptr) {
        *retSize = 0;
        return NULL;
    }

    char** res = (char**)malloc(obj->size * sizeof(char*));
    int count = 0;
    while (obj->ptr <= obj->size && obj->arr[obj->ptr - 1] != NULL) {
        res[count++] = obj->arr[obj->ptr - 1];
        obj->ptr++;
    }

    *retSize = count;
    return res;
}

void orderedStreamFree(OrderedStream* obj) {
    free(obj->arr);
    free(obj);
}
