struct NestedIterator {
    int* data;
    int size;
    int index;
};

void flatten(struct NestedInteger** nestedList, int nestedListSize, int** data, int* size, int* cap) {
    for (int i = 0; i < nestedListSize; i++) {
        if (NestedIntegerIsInteger(nestedList[i])) {
            if (*size == *cap) { *cap *= 2; *data = realloc(*data, sizeof(int) * (*cap)); }
            (*data)[(*size)++] = NestedIntegerGetInteger(nestedList[i]);
        } else {
            int subSize;
            struct NestedInteger** sub = NestedIntegerGetList(nestedList[i], &subSize);
            flatten(sub, subSize, data, size, cap);
        }
    }
}

struct NestedIterator* nestedIterCreate(struct NestedInteger** nestedList, int nestedListSize) {
    struct NestedIterator* iter = (struct NestedIterator*)malloc(sizeof(struct NestedIterator));
    int cap = 64;
    iter->data = (int*)malloc(sizeof(int) * cap);
    iter->size = 0;
    iter->index = 0;
    flatten(nestedList, nestedListSize, &iter->data, &iter->size, &cap);
    return iter;
}

bool nestedIterHasNext(struct NestedIterator* iter) {
    return iter->index < iter->size;
}

int nestedIterNext(struct NestedIterator* iter) {
    return iter->data[iter->index++];
}

void nestedIterFree(struct NestedIterator* iter) {
    free(iter->data); free(iter);
}
