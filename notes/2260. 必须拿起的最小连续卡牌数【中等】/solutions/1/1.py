class Solution:
    def minimumCardPickup(self, cards: list[int]) -> int:
        last_seen = {}
        min_len = float('inf')
        for i, c in enumerate(cards):
            if c in last_seen:
                min_len = min(min_len, i - last_seen[c] + 1)
            last_seen[c] = i
        return -1 if min_len == float('inf') else min_len
