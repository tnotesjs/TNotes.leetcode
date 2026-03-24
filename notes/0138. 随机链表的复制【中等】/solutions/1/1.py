"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""
class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None
        # 第一步：在每个节点后插入克隆节点
        cur = head
        while cur:
            clone = Node(cur.val, cur.next)
            cur.next = clone
            cur = clone.next
        # 第二步：设置克隆节点的 random
        cur = head
        while cur:
            if cur.random:
                cur.next.random = cur.random.next
            cur = cur.next.next
        # 第三步：拆分链表
        cur = head
        new_head = head.next
        while cur:
            clone = cur.next
            cur.next = clone.next
            clone.next = clone.next.next if clone.next else None
            cur = cur.next
        return new_head
