typedef struct {
    int* original;
    int* nums;
    int size;
} Solution;

Solution* solutionCreate(int* nums, int numsSize) {
    Solution* obj = (Solution*)malloc(sizeof(Solution));
    obj->original = (int*)malloc(sizeof(int) * numsSize);
    obj->nums = (int*)malloc(sizeof(int) * numsSize);
    memcpy(obj->original, nums, sizeof(int) * numsSize);
    memcpy(obj->nums, nums, sizeof(int) * numsSize);
    obj->size = numsSize;
    return obj;
}

int* solutionReset(Solution* obj, int* retSize) {
    memcpy(obj->nums, obj->original, sizeof(int) * obj->size);
    *retSize = obj->size;
    return obj->nums;
}

int* solutionShuffle(Solution* obj, int* retSize) {
    for (int i = obj->size - 1; i > 0; i--) {
        int j = rand() % (i + 1);
        int tmp = obj->nums[i]; obj->nums[i] = obj->nums[j]; obj->nums[j] = tmp;
    }
    *retSize = obj->size;
    return obj->nums;
}

void solutionFree(Solution* obj) {
    free(obj->original); free(obj->nums); free(obj);
}
