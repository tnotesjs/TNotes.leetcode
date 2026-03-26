class Solution:
    def countHighestScoreNodes(self, parents: list[int]) -> int:
        n = len(parents)
        children = [[] for _ in range(n)]
        for i in range(1, n):
            children[parents[i]].append(i)
        sz = [0] * n
        stack, order = [0], []
        while stack:
            u = stack.pop()
            order.append(u)
            for v in children[u]:
                stack.append(v)
        for u in reversed(order):
            sz[u] = 1 + sum(sz[v] for v in children[u])
        max_score = 0
        count = 0
        for i in range(n):
            score = 1
            rem = n - 1
            for v in children[i]:
                score *= sz[v]
                rem -= sz[v]
            if rem > 0:
                score *= rem
            if score > max_score:
                max_score = score
                count = 1
            elif score == max_score:
                count += 1
        return count
