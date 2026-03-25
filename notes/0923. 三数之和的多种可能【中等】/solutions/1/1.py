class Solution:
    def threeSumMulti(self, arr: list[int], target: int) -> int:
        MOD = 10 ** 9 + 7
        count = [0] * 101
        for x in arr:
            count[x] += 1

        res = 0
        for i in range(101):
            for j in range(i, 101):
                k = target - i - j
                if k < j or k > 100:
                    continue
                if not count[i] or not count[j] or not count[k]:
                    continue

                if i == j == k:
                    res += count[i] * (count[i] - 1) * (count[i] - 2) // 6
                elif i == j:
                    res += count[i] * (count[i] - 1) // 2 * count[k]
                elif j == k:
                    res += count[i] * count[j] * (count[j] - 1) // 2
                else:
                    res += count[i] * count[j] * count[k]
                res %= MOD

        return res
