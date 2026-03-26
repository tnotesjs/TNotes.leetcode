from collections import Counter

class Solution:
    def minimumRounds(self, tasks: list[int]) -> int:
        freq = Counter(tasks)
        rounds = 0
        for cnt in freq.values():
            if cnt == 1:
                return -1
            rounds += (cnt + 2) // 3
        return rounds
