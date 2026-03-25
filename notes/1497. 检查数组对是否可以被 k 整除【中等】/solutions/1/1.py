class Solution:
    def canArrange(self, arr: list[int], k: int) -> bool:
        cnt = [0] * k
        for x in arr:
            cnt[x % k] += 1
        if cnt[0] % 2 != 0:
            return False
        for i in range(1, k // 2 + 1):
            if cnt[i] != cnt[k - i]:
                return False
        return True
