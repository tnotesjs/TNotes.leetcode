class Solution:
    def carPooling(self, trips: list[list[int]], capacity: int) -> bool:
        diff = [0] * 1001
        for num, frm, to in trips:
            diff[frm] += num
            diff[to] -= num
        cur = 0
        for i in range(1001):
            cur += diff[i]
            if cur > capacity:
                return False
        return True
