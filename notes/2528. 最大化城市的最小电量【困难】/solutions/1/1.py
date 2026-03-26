class Solution:
    def maxPower(self, stations: list[int], r: int, k: int) -> int:
        n = len(stations)
        ps = [0] * (n + 1)
        for i in range(n):
            ps[i + 1] = ps[i] + stations[i]
        init_power = [0] * n
        for i in range(n):
            left = max(0, i - r)
            right = min(n - 1, i + r)
            init_power[i] = ps[right + 1] - ps[left]

        def check(min_power: int) -> bool:
            diff = [0] * (n + 1)
            add_sum = 0
            remain = k
            for i in range(n):
                add_sum += diff[i]
                cur = init_power[i] + add_sum
                if cur < min_power:
                    need = min_power - cur
                    if need > remain:
                        return False
                    remain -= need
                    add_sum += need
                    end_idx = i + 2 * r + 1
                    if end_idx <= n:
                        diff[end_idx] -= need
            return True

        lo, hi = 0, sum(stations) + k
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if check(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
