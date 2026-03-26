class Solution:
    def isItPossible(self, word1: str, word2: str) -> bool:
        cnt1 = [0] * 26
        cnt2 = [0] * 26
        for c in word1:
            cnt1[ord(c) - ord('a')] += 1
        for c in word2:
            cnt2[ord(c) - ord('a')] += 1
        for i in range(26):
            if cnt1[i] == 0:
                continue
            for j in range(26):
                if cnt2[j] == 0:
                    continue
                cnt1[i] -= 1; cnt1[j] += 1
                cnt2[j] -= 1; cnt2[i] += 1
                d1 = sum(1 for x in cnt1 if x > 0)
                d2 = sum(1 for x in cnt2 if x > 0)
                if d1 == d2:
                    return True
                cnt1[i] += 1; cnt1[j] -= 1
                cnt2[j] += 1; cnt2[i] -= 1
        return False
