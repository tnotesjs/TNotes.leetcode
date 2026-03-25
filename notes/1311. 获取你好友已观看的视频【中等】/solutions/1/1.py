class Solution:
    def watchedVideosByFriends(self, watchedVideos: list[list[str]], friends: list[list[int]], id: int, level: int) -> list[str]:
        n = len(watchedVideos)
        visited = [False] * n
        queue = deque([id])
        visited[id] = True
        for _ in range(level):
            for _ in range(len(queue)):
                u = queue.popleft()
                for v in friends[u]:
                    if not visited[v]:
                        visited[v] = True
                        queue.append(v)
        freq = Counter()
        for u in queue:
            for video in watchedVideos[u]:
                freq[video] += 1
        return sorted(freq.keys(), key=lambda x: (freq[x], x))
