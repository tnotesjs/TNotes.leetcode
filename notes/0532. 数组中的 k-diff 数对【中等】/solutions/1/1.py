class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
        freq = Counter(nums)
        count = 0
        for num in freq:
            if k == 0:
                if freq[num] > 1:
                    count += 1
            else:
                if num + k in freq:
                    count += 1
        return count
