class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        cnt = defaultdict(int)
        for row in wall:
            s = 0
            for i in range(len(row) - 1):
                s += row[i]
                cnt[s] += 1
        return len(wall) - max(cnt.values(), default=0)
