class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False
        cnt = [0] * 26
        for i in range(len(s1)):
            cnt[ord(s1[i]) - 97] += 1
            cnt[ord(s2[i]) - 97] -= 1
        if all(v == 0 for v in cnt):
            return True
        for i in range(len(s1), len(s2)):
            cnt[ord(s2[i]) - 97] -= 1
            cnt[ord(s2[i - len(s1)]) - 97] += 1
            if all(v == 0 for v in cnt):
                return True
        return False
