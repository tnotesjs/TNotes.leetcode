class Solution:
    def bestCoordinate(self, towers: list[list[int]], radius: int) -> list[int]:
        import math
        max_signal = 0
        res = [0, 0]
        for x in range(51):
            for y in range(51):
                signal = 0
                for xi, yi, qi in towers:
                    d = math.sqrt((x - xi) ** 2 + (y - yi) ** 2)
                    if d <= radius:
                        signal += int(qi / (1 + d))
                if signal > max_signal:
                    max_signal = signal
                    res = [x, y]
        return res
