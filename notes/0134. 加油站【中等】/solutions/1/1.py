class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        total_tank, cur_tank, start = 0, 0, 0
        for i in range(len(gas)):
            diff = gas[i] - cost[i]
            total_tank += diff
            cur_tank += diff
            if cur_tank < 0:
                start = i + 1
                cur_tank = 0
        return start if total_tank >= 0 else -1
