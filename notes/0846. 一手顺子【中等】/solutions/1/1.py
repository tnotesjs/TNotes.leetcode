class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0: return False
        from collections import Counter
        cnt = Counter(hand)
        for card in sorted(cnt):
            c = cnt[card]
            if c == 0: continue
            for i in range(groupSize):
                if cnt[card + i] < c: return False
                cnt[card + i] -= c
        return True
