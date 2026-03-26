class Solution:
    def survivedRobotsHealths(self, positions: list[int], healths: list[int], directions: str) -> list[int]:
        n = len(positions)
        idx = sorted(range(n), key=lambda i: positions[i])
        stack = []
        for i in idx:
            if directions[i] == 'R':
                stack.append(i)
                continue
            while stack and healths[i] > 0:
                top = stack[-1]
                if healths[top] < healths[i]:
                    stack.pop()
                    healths[top] = 0
                    healths[i] -= 1
                elif healths[top] > healths[i]:
                    healths[top] -= 1
                    healths[i] = 0
                else:
                    stack.pop()
                    healths[top] = 0
                    healths[i] = 0
        return [h for h in healths if h > 0]
