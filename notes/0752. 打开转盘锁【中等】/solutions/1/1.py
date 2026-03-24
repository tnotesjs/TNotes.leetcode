class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        dead = set(deadends)
        if '0000' in dead:
            return -1
        visited = {'0000'}
        queue = deque(['0000'])
        step = 0
        while queue:
            for _ in range(len(queue)):
                cur = queue.popleft()
                if cur == target:
                    return step
                for j in range(4):
                    for d in (-1, 1):
                        nxt = cur[:j] + str((int(cur[j]) + d) % 10) + cur[j+1:]
                        if nxt not in visited and nxt not in dead:
                            visited.add(nxt)
                            queue.append(nxt)
            step += 1
        return -1
