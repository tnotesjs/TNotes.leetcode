class Solution:
    def minNumberOfFrogs(self, croakOfFrogs: str) -> int:
        cnt = [0] * 5  # c r o a k
        idx = {'c': 0, 'r': 1, 'o': 2, 'a': 3, 'k': 4}
        max_frogs = 0
        for ch in croakOfFrogs:
            i = idx[ch]
            if i == 0:
                cnt[0] += 1
                max_frogs = max(max_frogs, cnt[0] - cnt[4])
            else:
                if cnt[i - 1] <= cnt[i]:
                    return -1
                cnt[i] += 1
        return max_frogs if len(set(cnt)) == 1 else -1
