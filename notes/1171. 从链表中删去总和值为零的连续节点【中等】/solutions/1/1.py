class Solution:
    def removeZeroSumSublists(self, head):
        dummy = ListNode(0, head)
        last = {}
        s = 0
        node = dummy
        while node:
            s += node.val
            last[s] = node
            node = node.next
        s = 0
        node = dummy
        while node:
            s += node.val
            node.next = last[s].next
            node = node.next
        return dummy.next
