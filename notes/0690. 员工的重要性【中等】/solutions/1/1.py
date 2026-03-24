class Solution:
    def getImportance(self, employees: List['Employee'], id: int) -> int:
        mp = {e.id: e for e in employees}
        def dfs(eid):
            e = mp[eid]
            return e.importance + sum(dfs(sub) for sub in e.subordinates)
        return dfs(id)
