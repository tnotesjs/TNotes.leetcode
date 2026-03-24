class Solution:
    def flatten(self, head: 'Optional[Node]') -> 'Optional[Node]':
        cur = head
        while cur:
            if cur.child:
                nxt = cur.next
                child = cur.child
                cur.next = child
                child.prev = cur
                cur.child = None
                tail = child
                while tail.next:
                    tail = tail.next
                tail.next = nxt
                if nxt:
                    nxt.prev = tail
            cur = cur.next
        return head
