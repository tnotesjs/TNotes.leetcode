class Solution:
    def __init__(self, head: Optional[ListNode]):
        self.head = head

    def getRandom(self) -> int:
        res, i, node = 0, 1, self.head
        while node:
            if random.randint(1, i) == 1:
                res = node.val
            node = node.next
            i += 1
        return res
