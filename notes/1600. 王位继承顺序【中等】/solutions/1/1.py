class ThroneInheritance:
    def __init__(self, kingName: str):
        self.king = kingName
        self.children: dict[str, list[str]] = {}
        self.dead: set[str] = set()

    def birth(self, parentName: str, childName: str) -> None:
        self.children.setdefault(parentName, []).append(childName)

    def death(self, name: str) -> None:
        self.dead.add(name)

    def getInheritanceOrder(self) -> list[str]:
        res = []
        def dfs(name: str) -> None:
            if name not in self.dead:
                res.append(name)
            for child in self.children.get(name, []):
                dfs(child)
        dfs(self.king)
        return res
