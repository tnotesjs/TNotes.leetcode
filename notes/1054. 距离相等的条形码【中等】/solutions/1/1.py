class Solution:
    def rearrangeBarcodes(self, barcodes: list[int]) -> list[int]:
        from collections import Counter
        count = Counter(barcodes)
        sorted_items = sorted(count.items(), key=lambda x: -x[1])
        res = [0] * len(barcodes)
        idx = 0
        for val, cnt in sorted_items:
            for _ in range(cnt):
                res[idx] = val
                idx += 2
                if idx >= len(barcodes):
                    idx = 1
        return res
