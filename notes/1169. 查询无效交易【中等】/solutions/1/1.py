class Solution:
    def invalidTransactions(self, transactions: list[str]) -> list[str]:
        parsed = []
        for i, t in enumerate(transactions):
            name, time, amount, city = t.split(',')
            parsed.append((name, int(time), int(amount), city))
        invalid = set()
        for i in range(len(parsed)):
            if parsed[i][2] > 1000:
                invalid.add(i)
            for j in range(i + 1, len(parsed)):
                if (parsed[i][0] == parsed[j][0] and
                    parsed[i][3] != parsed[j][3] and
                    abs(parsed[i][1] - parsed[j][1]) <= 60):
                    invalid.add(i)
                    invalid.add(j)
        return [transactions[i] for i in sorted(invalid)]
