class Solution:
    def findLonely(self, nums: List[int]) -> List[int]:
        count = Counter(nums)
        return [x for x, c in count.items() if c == 1 and x - 1 not in count and x + 1 not in count]
