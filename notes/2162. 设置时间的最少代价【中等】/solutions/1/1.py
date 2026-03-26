class Solution:
    def minCostSetTime(self, startAt: int, moveCost: int, pushCost: int, targetSeconds: int) -> int:
        res = float('inf')
        for mm in range(100):
            ss = targetSeconds - mm * 60
            if ss < 0 or ss > 99:
                continue
            time = mm * 100 + ss
            digits = list(str(time)) if time > 0 else ['0']
            cost = 0
            cur = str(startAt)
            for d in digits:
                if cur != d:
                    cost += moveCost
                    cur = d
                cost += pushCost
            res = min(res, cost)
        return res
