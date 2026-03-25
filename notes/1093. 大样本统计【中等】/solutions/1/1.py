class Solution:
    def sampleStats(self, count: list[int]) -> list[float]:
        min_val = max_val = mode = -1
        total = s = max_freq = 0
        for i in range(256):
            if count[i] == 0:
                continue
            if min_val == -1:
                min_val = i
            max_val = i
            total += count[i]
            s += i * count[i]
            if count[i] > max_freq:
                max_freq = count[i]
                mode = i
        mean = s / total
        half1, half2 = (total - 1) // 2, total // 2
        m1 = m2 = -1
        acc = 0
        for i in range(256):
            acc += count[i]
            if m1 == -1 and acc > half1:
                m1 = i
            if m2 == -1 and acc > half2:
                m2 = i
        return [float(min_val), float(max_val), mean, (m1 + m2) / 2, float(mode)]
