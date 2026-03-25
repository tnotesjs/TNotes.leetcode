class Solution:
    def numberOfRounds(self, loginTime: str, logoutTime: str) -> int:
        start = int(loginTime[:2]) * 60 + int(loginTime[3:])
        end = int(logoutTime[:2]) * 60 + int(logoutTime[3:])
        if end < start:
            end += 1440
        start = -(-start // 15) * 15  # ceil to 15
        return max(0, end // 15 - start // 15)
