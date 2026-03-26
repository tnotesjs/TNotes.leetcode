class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        def solve(ch):
            left = flips = res = 0
            for right, c in enumerate(answerKey):
                if c != ch:
                    flips += 1
                while flips > k:
                    if answerKey[left] != ch:
                        flips -= 1
                    left += 1
                res = max(res, right - left + 1)
            return res
        return max(solve('T'), solve('F'))
