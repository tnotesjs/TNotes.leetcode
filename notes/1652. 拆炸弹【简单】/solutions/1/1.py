class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        n = len(code)
        if k == 0:
            return [0] * n

        res = [0] * n
        arr = code + code

        if k > 0:
            total = sum(arr[1:k + 1])
            res[0] = total
            for i in range(1, n):
                total += arr[i + k] - arr[i]
                res[i] = total
        else:
            w = -k
            cur = n
            total = sum(arr[cur - w:cur])
            res[0] = total
            for i in range(1, n):
                total += arr[cur] - arr[cur - w]
                cur += 1
                res[i] = total

        return res
