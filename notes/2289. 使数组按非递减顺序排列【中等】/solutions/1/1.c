int totalSteps(int* nums, int numsSize) {
    int* stackIdx = (int*)malloc(numsSize * sizeof(int));
    int* stackSteps = (int*)malloc(numsSize * sizeof(int));
    int top = -1, res = 0;
    for (int i = numsSize - 1; i >= 0; i--) {
        int steps = 0;
        while (top >= 0 && nums[i] > nums[stackIdx[top]]) {
            int s = stackSteps[top];
            steps = (steps + 1 > s) ? steps + 1 : s;
            top--;
        }
        top++;
        stackIdx[top] = i;
        stackSteps[top] = steps;
        if (steps > res) res = steps;
    }
    free(stackIdx);
    free(stackSteps);
    return res;
}
