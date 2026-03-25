class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        from collections import deque
        n = len(board)
        def get_pos(s):
            r, c = divmod(s - 1, n)
            row = n - 1 - r
            col = c if r % 2 == 0 else n - 1 - c
            return row, col
        visited = {1}
        queue = deque([1])
        steps = 0
        while queue:
            for _ in range(len(queue)):
                cur = queue.popleft()
                if cur == n * n: return steps
                for i in range(1, 7):
                    nxt = cur + i
                    if nxt > n * n: break
                    r, c = get_pos(nxt)
                    dest = nxt if board[r][c] == -1 else board[r][c]
                    if dest not in visited:
                        visited.add(dest)
                        queue.append(dest)
            steps += 1
        return -1
