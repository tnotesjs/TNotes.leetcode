class Solution:
    def pathInZigZagTree(self, label: int) -> list[int]:
        level = 1
        while (1 << level) <= label:
            level += 1
        res = []
        while label >= 1:
            res.append(label)
            level_start = 1 << (level - 1)
            level_end = (1 << level) - 1
            label = (level_start + level_end - label) // 2
            level -= 1
        return res[::-1]
