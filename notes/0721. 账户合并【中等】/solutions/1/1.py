class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        parent = {}
        def find(x):
            parent.setdefault(x, x)
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        def union(a, b):
            parent[find(a)] = find(b)

        email_to_name = {}
        for acc in accounts:
            name = acc[0]
            for email in acc[1:]:
                email_to_name[email] = name
                union(acc[1], email)

        groups = defaultdict(list)
        for email in email_to_name:
            groups[find(email)].append(email)

        return [[email_to_name[root]] + sorted(emails) for root, emails in groups.items()]
