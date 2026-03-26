class Solution:
    def minOperations(self, nums: List[int], target: int) -> int:
        if sum(nums) < target:
            return -1
        cnt = [0] * 32
        for x in nums:
            cnt[x.bit_length() - 1] += 1
        ops = 0
        for i in range(31):
            if (target >> i) & 1:
                if cnt[i] > 0:
                    cnt[i] -= 1
                else:
                    j = i + 1
                    while cnt[j] == 0:
                        j += 1
                    ops += j - i
                    cnt[j] -= 1
                    for l in range(j - 1, i, -1):
                        cnt[l] += 1
            cnt[i + 1] += cnt[i] >> 1
        return ops
