class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        res = 0
        prev = 0
        for row in bank:
            count = row.count('1')
            if count > 0:
                res += prev * count
                prev = count
        return res
