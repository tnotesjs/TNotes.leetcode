int resSize;
int** res;
int* resColSizes;
int path[15];
int pathLen;

void dfs(int* nums, int numsSize, int start) {
    if (pathLen >= 2) {
        res[resSize] = (int*)malloc(sizeof(int) * pathLen);
        memcpy(res[resSize], path, sizeof(int) * pathLen);
        resColSizes[resSize] = pathLen;
        resSize++;
    }
    int used[201] = {0}; // nums[i] ∈ [-100, 100]
    for (int i = start; i < numsSize; i++) {
        if (used[nums[i] + 100]) continue;
        if (pathLen > 0 && nums[i] < path[pathLen - 1]) continue;
        used[nums[i] + 100] = 1;
        path[pathLen++] = nums[i];
        dfs(nums, numsSize, i + 1);
        pathLen--;
    }
}

int** findSubsequences(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    res = (int**)malloc(sizeof(int*) * 100000);
    resColSizes = (int*)malloc(sizeof(int) * 100000);
    resSize = 0;
    pathLen = 0;
    dfs(nums, numsSize, 0);
    *returnSize = resSize;
    *returnColumnSizes = resColSizes;
    return res;
}
