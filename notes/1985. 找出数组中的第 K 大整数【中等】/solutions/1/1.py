class Solution:
    def kthLargestNumber(self, nums: list[str], k: int) -> str:
        nums.sort(key=lambda x: (len(x), x))
        return nums[-k]
