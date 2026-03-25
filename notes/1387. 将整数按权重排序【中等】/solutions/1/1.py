class Solution:
    def getKth(self, lo: int, hi: int, k: int) -> int:
        def weight(x: int) -> int:
            steps = 0
            while x != 1:
                x = x // 2 if x % 2 == 0 else 3 * x + 1
                steps += 1
            return steps

        arr = sorted(range(lo, hi + 1), key=lambda x: (weight(x), x))
        return arr[k - 1]
