int cmp2563(const void* a, const void* b) {
    int va = *(int*)a, vb = *(int*)b;
    return va < vb ? -1 : va > vb ? 1 : 0;
}

long long countFairPairs(int* nums, int numsSize, int lower, int upper) {
    qsort(nums, numsSize, sizeof(int), cmp2563);
    long long countLess(long long target) {
        long long cnt = 0;
        int lo = 0, hi = numsSize - 1;
        while (lo < hi) {
            if ((long long)nums[lo] + nums[hi] < target) { cnt += hi - lo; lo++; }
            else hi--;
        }
        return cnt;
    }
    return countLess((long long)upper + 1) - countLess((long long)lower);
}
