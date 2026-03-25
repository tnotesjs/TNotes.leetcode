class Solution:
    def getFolderNames(self, names: list[str]) -> list[str]:
        used: dict[str, int] = {}
        res: list[str] = []
        for name in names:
            if name not in used:
                res.append(name)
                used[name] = 1
            else:
                k = used[name]
                while f"{name}({k})" in used:
                    k += 1
                new_name = f"{name}({k})"
                res.append(new_name)
                used[name] = k + 1
                used[new_name] = 1
        return res
