class Solution:
    def largestTimeFromDigits(self, arr: list[int]) -> str:
        max_minutes = -1

        for i in range(4):
            for j in range(4):
                if j == i:
                    continue
                for k in range(4):
                    if k == i or k == j:
                        continue
                    l = 6 - i - j - k
                    hours = arr[i] * 10 + arr[j]
                    minutes = arr[k] * 10 + arr[l]
                    if hours < 24 and minutes < 60:
                        max_minutes = max(max_minutes, hours * 60 + minutes)

        if max_minutes == -1:
            return ''
        return f'{max_minutes // 60:02d}:{max_minutes % 60:02d}'
