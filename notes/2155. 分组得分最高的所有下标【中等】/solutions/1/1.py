class Solution:
    def maxScoreIndices(self, nums: List[int]) -> List[int]:
        n = len(nums)
        total_ones = sum(nums)
        zeros = 0
        ones = total_ones
        max_score = total_ones
        res = [0]
        for i in range(n):
            if nums[i] == 0:
                zeros += 1
            else:
                ones -= 1
            score = zeros + ones
            if score > max_score:
                max_score = score
                res = [i + 1]
            elif score == max_score:
                res.append(i + 1)
        return res
