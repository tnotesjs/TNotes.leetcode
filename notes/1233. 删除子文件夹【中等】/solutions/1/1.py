class Solution:
    def removeSubfolders(self, folder: list[str]) -> list[str]:
        folder.sort()
        res = [folder[0]]
        for f in folder[1:]:
            if not f.startswith(res[-1] + '/'):
                res.append(f)
        return res
