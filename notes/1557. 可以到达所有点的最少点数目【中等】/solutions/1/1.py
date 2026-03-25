class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: list[list[int]]) -> list[int]:
        has_incoming = set(v for _, v in edges)
        return [i for i in range(n) if i not in has_incoming]
