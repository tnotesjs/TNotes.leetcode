class Solution:
    def numberOfWeeks(self, milestones: list[int]) -> int:
        total = sum(milestones)
        max_val = max(milestones)
        rest = total - max_val
        return total if rest >= max_val else 2 * rest + 1
