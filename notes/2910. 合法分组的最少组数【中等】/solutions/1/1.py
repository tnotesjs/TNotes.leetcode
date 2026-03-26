class Solution:
    def minGroupsForValidAssignment(self, nums: list[int]) -> int:
        from collections import Counter
        freqs = list(Counter(nums).values())
        min_freq = min(freqs)

        for k in range(min_freq, 0, -1):
            total = 0
            valid = True
            for f in freqs:
                g = (f + k) // (k + 1)
                if g * k > f:
                    valid = False
                    break
                total += g
            if valid:
                return total
        return len(nums)
