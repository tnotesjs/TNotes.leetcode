bool canPartition(int* nums, int numsSize) {
    int sum = 0;
    for (int i = 0; i < numsSize; i++) sum += nums[i];
    if (sum % 2 != 0) return false;
    int target = sum / 2;

    // 位集：157 个 64 位字可表示 0~10047 共 10048 个位（target 最大为 10000）
    unsigned long long bits[157];
    memset(bits, 0, sizeof(bits));
    bits[0] = 1ULL; // bit 0 置 1，表示和 0 可达

    for (int i = 0; i < numsSize; i++) {
        int num = nums[i];
        int wshift = num / 64; // 整字偏移
        int bshift = num % 64; // 位内偏移
        // 从高位到低位更新，避免重复使用同一个数
        for (int w = 156; w >= wshift; w--) {
            unsigned long long val = bits[w - wshift] << bshift;
            if (bshift > 0 && w > wshift) {
                val |= bits[w - wshift - 1] >> (64 - bshift);
            }
            bits[w] |= val;
        }
    }
    return (bits[target / 64] >> (target % 64)) & 1ULL;
}
