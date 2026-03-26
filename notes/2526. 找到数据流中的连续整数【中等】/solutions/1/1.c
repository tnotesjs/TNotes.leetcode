typedef struct {
    int value;
    int k;
    int count;
} DataStream;

DataStream* dataStreamCreate(int value, int k) {
    DataStream *obj = (DataStream *)malloc(sizeof(DataStream));
    obj->value = value;
    obj->k = k;
    obj->count = 0;
    return obj;
}

bool dataStreamConsec(DataStream* obj, int num) {
    if (num == obj->value) obj->count++;
    else obj->count = 0;
    return obj->count >= obj->k;
}

void dataStreamFree(DataStream* obj) {
    free(obj);
}
