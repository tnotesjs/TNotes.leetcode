typedef struct {
    int* tree;
    int* nums;
    int n;
} NumArray;

NumArray* numArrayCreate(int* nums, int numsSize) {
    NumArray* obj = (NumArray*)malloc(sizeof(NumArray));
    obj->n = numsSize;
    obj->tree = (int*)calloc(numsSize + 1, sizeof(int));
    obj->nums = (int*)calloc(numsSize, sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        int delta = nums[i];
        obj->nums[i] = nums[i];
        for (int j = i + 1; j <= numsSize; j += j & (-j))
            obj->tree[j] += delta;
    }
    return obj;
}

void numArrayUpdate(NumArray* obj, int index, int val) {
    int delta = val - obj->nums[index];
    obj->nums[index] = val;
    for (int i = index + 1; i <= obj->n; i += i & (-i))
        obj->tree[i] += delta;
}

int query(NumArray* obj, int i) {
    int s = 0;
    for (; i > 0; i -= i & (-i)) s += obj->tree[i];
    return s;
}

int numArraySumRange(NumArray* obj, int left, int right) {
    return query(obj, right + 1) - query(obj, left);
}

void numArrayFree(NumArray* obj) {
    free(obj->tree); free(obj->nums); free(obj);
}
