int minimumIndex(int *nums, int numsSize) {
    // Boyer-Moore 投票找支配元素
    int dom = nums[0], vote = 0;
    for (int i = 0; i < numsSize; i++) {
        if (vote == 0) dom = nums[i];
        vote += (nums[i] == dom) ? 1 : -1;
    }
    int domCnt = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == dom) domCnt++;
    }
    int leftCnt = 0;
    for (int i = 0; i < numsSize - 1; i++) {
        if (nums[i] == dom) leftCnt++;
        int leftLen = i + 1;
        int rightLen = numsSize - leftLen;
        int rightCnt = domCnt - leftCnt;
        if (leftCnt * 2 > leftLen && rightCnt * 2 > rightLen) return i;
    }
    return -1;
}
