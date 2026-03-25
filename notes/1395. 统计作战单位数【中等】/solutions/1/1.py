class Solution:
    def numTeams(self, rating: list[int]) -> int:
        n = len(rating)
        res = 0
        for j in range(1, n - 1):
            left_less = sum(1 for i in range(j) if rating[i] < rating[j])
            right_greater = sum(1 for k in range(j + 1, n) if rating[k] > rating[j])
            left_greater = j - left_less
            right_less = (n - 1 - j) - right_greater
            res += left_less * right_greater + left_greater * right_less
        return res
