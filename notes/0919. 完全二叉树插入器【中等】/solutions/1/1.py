from collections import deque

class CBTInserter:
    def __init__(self, root: 'TreeNode'):
        self.root = root
        self.queue = deque()
        # BFS 初始化找到所有未满的节点
        bfs = deque([root])
        while bfs:
            node = bfs.popleft()
            if node.left:
                bfs.append(node.left)
            if node.right:
                bfs.append(node.right)
            if not node.left or not node.right:
                self.queue.append(node)

    def insert(self, val: int) -> int:
        new_node = TreeNode(val)
        parent = self.queue[0]
        if not parent.left:
            parent.left = new_node
        else:
            parent.right = new_node
            self.queue.popleft()
        self.queue.append(new_node)
        return parent.val

    def get_root(self) -> 'TreeNode':
        return self.root
