class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        bank_set = set(bank)
        if endGene not in bank_set:
            return -1
        queue = deque([(startGene, 0)])
        visited = {startGene}
        while queue:
            gene, step = queue.popleft()
            for i in range(8):
                for ch in 'ACGT':
                    nxt = gene[:i] + ch + gene[i+1:]
                    if nxt == endGene:
                        return step + 1
                    if nxt in bank_set and nxt not in visited:
                        visited.add(nxt)
                        queue.append((nxt, step + 1))
        return -1
