class Solution:
    def numComponents(self, head: Optional[ListNode], nums: List[int]) -> int:
        s = set(nums)
        res = 0
        in_comp = False
        while head:
            if head.val in s:
                if not in_comp:
                    res += 1
                    in_comp = True
            else:
                in_comp = False
            head = head.next
        return res
