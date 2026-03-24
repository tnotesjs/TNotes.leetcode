class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        in_degree = [0] * numCourses
        graph = [[] for _ in range(numCourses)]
        for a, b in prerequisites:
            graph[b].append(a)
            in_degree[a] += 1
        queue = deque(i for i in range(numCourses) if in_degree[i] == 0)
        order = []
        while queue:
            cur = queue.popleft()
            order.append(cur)
            for nxt in graph[cur]:
                in_degree[nxt] -= 1
                if in_degree[nxt] == 0:
                    queue.append(nxt)
        return order if len(order) == numCourses else []
