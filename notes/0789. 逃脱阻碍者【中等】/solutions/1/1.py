class Solution:
    def escapeGhosts(self, ghosts: List[List[int]], target: List[int]) -> bool:
        dist = abs(target[0]) + abs(target[1])
        return all(abs(gx - target[0]) + abs(gy - target[1]) > dist for gx, gy in ghosts)
