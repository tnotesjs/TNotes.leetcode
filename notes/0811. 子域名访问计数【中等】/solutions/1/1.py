class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        from collections import Counter
        cnt = Counter()
        for cp in cpdomains:
            count, domain = cp.split()
            count = int(count)
            parts = domain.split('.')
            for i in range(len(parts)):
                cnt['.'.join(parts[i:])] += count
        return [f'{c} {d}' for d, c in cnt.items()]
