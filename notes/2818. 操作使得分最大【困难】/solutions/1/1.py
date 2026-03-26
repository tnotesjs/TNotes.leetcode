class Solution:
    def maximumScore(self, nums: list[int], k: int) -> int:
        MOD = 10 ** 9 + 7
        n = len(nums)
        ps = [0] * n
        for i in range(n):
            x, score = nums[i], 0
            p = 2
            while p * p <= x:
                if x % p == 0:
                    score += 1
                    while x % p == 0:
                        x //= p
                p += 1
            if x > 1:
                score += 1
            ps[i] = score
        left = [0] * n
        right = [n] * n
        stack = []
        for i in range(n):
            while stack and ps[stack[-1]] < ps[i]:
                right[stack.pop()] = i
            left[i] = stack[-1] if stack else -1
            stack.append(i)
        indices = sorted(range(n), key=lambda i: -nums[i])
        ans = 1
        remaining = k
        for i in indices:
            if remaining <= 0:
                break
            count = (i - left[i]) * (right[i] - i)
            use = min(count, remaining)
            ans = ans * pow(nums[i], use, MOD) % MOD
            remaining -= use
        return ans
