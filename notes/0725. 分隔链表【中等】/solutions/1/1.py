class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        length = 0
        cur = head
        while cur:
            length += 1
            cur = cur.next
        size, extra = divmod(length, k)
        res = [None] * k
        cur = head
        for i in range(k):
            if not cur:
                break
            res[i] = cur
            part_size = size + (1 if i < extra else 0)
            for _ in range(part_size - 1):
                cur = cur.next
            nxt = cur.next
            cur.next = None
            cur = nxt
        return res
