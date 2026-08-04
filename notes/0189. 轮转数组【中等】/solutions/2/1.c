void rotate(int* nums, int numsSize, int k) {
    k %= numsSize;
    int count = 0;
    // 共有 gcd(k, n) 个环，把每个环上的元素依次放到目标位置
    for (int start = 0; count < numsSize; start++) {
        int current = start;
        int prev = nums[start];
        do {
            int next = (current + k) % numsSize;
            int temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (current != start);
    }
}
