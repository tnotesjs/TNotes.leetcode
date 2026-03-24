class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        c1 = c2 = 0
        cnt1 = cnt2 = 0
        for num in nums:
            if cnt1 > 0 and num == c1:
                cnt1 += 1
            elif cnt2 > 0 and num == c2:
                cnt2 += 1
            elif cnt1 == 0:
                c1, cnt1 = num, 1
            elif cnt2 == 0:
                c2, cnt2 = num, 1
            else:
                cnt1 -= 1
                cnt2 -= 1
        cnt1 = sum(1 for x in nums if x == c1)
        cnt2 = sum(1 for x in nums if x == c2)
        res = []
        if cnt1 > len(nums) // 3:
            res.append(c1)
        if cnt2 > len(nums) // 3:
            res.append(c2)
        return res
