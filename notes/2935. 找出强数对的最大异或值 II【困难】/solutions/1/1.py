class Solution:
    def maximumStrongPairXor(self, nums: list[int]) -> int:
        nums.sort()
        HIGH_BIT = 19
        ch = [[0, 0]]
        cnt = [0]
        def add(val):
            cur = 0
            for i in range(HIGH_BIT, -1, -1):
                bit = (val >> i) & 1
                if not ch[cur][bit]:
                    ch.append([0, 0])
                    cnt.append(0)
                    ch[cur][bit] = len(ch) - 1
                cur = ch[cur][bit]
                cnt[cur] += 1
        def remove(val):
            cur = 0
            for i in range(HIGH_BIT, -1, -1):
                cur = ch[cur][(val >> i) & 1]
                cnt[cur] -= 1
        def max_xor(val):
            cur = 0
            res = 0
            for i in range(HIGH_BIT, -1, -1):
                bit = (val >> i) & 1
                want = 1 - bit
                if ch[cur][want] and cnt[ch[cur][want]] > 0:
                    res |= (1 << i)
                    cur = ch[cur][want]
                else:
                    cur = ch[cur][bit]
            return res
        ans = 0
        left = 0
        for right in range(len(nums)):
            add(nums[right])
            while nums[right] > 2 * nums[left]:
                remove(nums[left])
                left += 1
            ans = max(ans, max_xor(nums[right]))
        return ans
