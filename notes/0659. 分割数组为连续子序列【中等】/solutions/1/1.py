class Solution:
    def isPossible(self, nums: List[int]) -> bool:
        freq = Counter(nums)
        tail = Counter()
        for n in nums:
            if freq[n] == 0:
                continue
            if tail[n] > 0:
                freq[n] -= 1
                tail[n] -= 1
                tail[n + 1] += 1
            elif freq[n + 1] > 0 and freq[n + 2] > 0:
                freq[n] -= 1
                freq[n + 1] -= 1
                freq[n + 2] -= 1
                tail[n + 3] += 1
            else:
                return False
        return True
