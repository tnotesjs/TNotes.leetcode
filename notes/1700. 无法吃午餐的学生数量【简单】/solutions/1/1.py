class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        cnt0 = students.count(0)
        cnt1 = students.count(1)
        for sw in sandwiches:
            if sw == 0:
                if cnt0 == 0:
                    return cnt1
                cnt0 -= 1
            else:
                if cnt1 == 0:
                    return cnt0
                cnt1 -= 1
        return 0
