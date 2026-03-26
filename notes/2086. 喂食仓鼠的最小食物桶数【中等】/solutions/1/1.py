class Solution:
    def minimumBuckets(self, hamsters: str) -> int:
        s = list(hamsters)
        n = len(s)
        count = 0
        for i in range(n):
            if s[i] == 'H':
                if i > 0 and s[i - 1] == 'B':
                    continue
                if i + 1 < n and s[i + 1] == '.':
                    s[i + 1] = 'B'
                    count += 1
                elif i > 0 and s[i - 1] == '.':
                    s[i - 1] = 'B'
                    count += 1
                else:
                    return -1
        return count
