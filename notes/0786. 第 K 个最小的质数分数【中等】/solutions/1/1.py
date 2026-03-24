class Solution:
    def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
        n = len(arr)
        lo, hi = 0.0, 1.0
        while lo < hi:
            mid = (lo + hi) / 2
            cnt = 0
            p, q = 0, 1
            j = 1
            for i in range(n):
                while j < n and arr[i] > mid * arr[j]:
                    j += 1
                cnt += n - j
                if j < n and p * arr[j] < q * arr[i]:
                    p, q = arr[i], arr[j]
            if cnt == k:
                return [p, q]
            if cnt < k:
                lo = mid
            else:
                hi = mid
