class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        cnt = Counter(tasks)
        max_cnt = max(cnt.values())
        max_num = sum(1 for v in cnt.values() if v == max_cnt)
        return max(len(tasks), (max_cnt - 1) * (n + 1) + max_num)
