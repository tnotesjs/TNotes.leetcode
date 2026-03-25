class Solution:
    def canReach(self, arr: list[int], start: int) -> bool:
        n = len(arr)
        visited = [False] * n
        queue = deque([start])
        visited[start] = True
        while queue:
            i = queue.popleft()
            if arr[i] == 0:
                return True
            for nxt in [i + arr[i], i - arr[i]]:
                if 0 <= nxt < n and not visited[nxt]:
                    visited[nxt] = True
                    queue.append(nxt)
        return False
