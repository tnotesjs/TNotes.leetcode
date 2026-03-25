class Solution:
    def largestValsFromLabels(self, values: list[int], labels: list[int], numWanted: int, useLimit: int) -> int:
        indices = sorted(range(len(values)), key=lambda i: -values[i])
        label_count = {}
        res = count = 0
        for i in indices:
            label = labels[i]
            if label_count.get(label, 0) >= useLimit:
                continue
            res += values[i]
            label_count[label] = label_count.get(label, 0) + 1
            count += 1
            if count == numWanted:
                break
        return res
