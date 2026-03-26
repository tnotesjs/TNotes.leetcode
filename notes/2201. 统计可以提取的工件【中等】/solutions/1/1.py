class Solution:
    def digArtifacts(self, n: int, artifacts: list[list[int]], dig: list[list[int]]) -> int:
        dug = set()
        for r, c in dig:
            dug.add((r, c))
        count = 0
        for r1, c1, r2, c2 in artifacts:
            if all((r, c) in dug for r in range(r1, r2 + 1) for c in range(c1, c2 + 1)):
                count += 1
        return count
