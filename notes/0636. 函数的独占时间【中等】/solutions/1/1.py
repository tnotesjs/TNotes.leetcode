class Solution:
    def exclusiveTime(self, n: int, logs: List[str]) -> List[int]:
        res = [0] * n
        stack = []
        prev = 0
        for log in logs:
            parts = log.split(':')
            fid, typ, time = int(parts[0]), parts[1], int(parts[2])
            if typ == 'start':
                if stack:
                    res[stack[-1]] += time - prev
                stack.append(fid)
                prev = time
            else:
                res[stack.pop()] += time - prev + 1
                prev = time + 1
        return res
