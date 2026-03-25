from collections import defaultdict

class Solution:
    def findingUsersActiveMinutes(self, logs: list[list[int]], k: int) -> list[int]:
        user_minutes = defaultdict(set)
        for uid, time in logs:
            user_minutes[uid].add(time)
        ans = [0] * k
        for times in user_minutes.values():
            uam = len(times)
            if uam <= k:
                ans[uam - 1] += 1
        return ans
