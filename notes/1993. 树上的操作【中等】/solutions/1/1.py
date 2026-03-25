class LockingTree:
    def __init__(self, parent: list[int]):
        self.parent = parent
        n = len(parent)
        self.children = [[] for _ in range(n)]
        for i in range(1, n):
            self.children[parent[i]].append(i)
        self.locked = [-1] * n

    def lock(self, num: int, user: int) -> bool:
        if self.locked[num] != -1:
            return False
        self.locked[num] = user
        return True

    def unlock(self, num: int, user: int) -> bool:
        if self.locked[num] != user:
            return False
        self.locked[num] = -1
        return True

    def upgrade(self, num: int, user: int) -> bool:
        if self.locked[num] != -1:
            return False
        p = self.parent[num]
        while p != -1:
            if self.locked[p] != -1:
                return False
            p = self.parent[p]
        found = [False]
        def unlock_desc(node):
            if self.locked[node] != -1:
                self.locked[node] = -1
                found[0] = True
            for c in self.children[node]:
                unlock_desc(c)
        unlock_desc(num)
        if not found[0]:
            return False
        self.locked[num] = user
        return True
