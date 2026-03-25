class Solution:
    def displayTable(self, orders: list[list[str]]) -> list[list[str]]:
        from collections import defaultdict
        food_set: set[str] = set()
        table_map: dict[int, dict[str, int]] = defaultdict(lambda: defaultdict(int))
        for _, table, food in orders:
            food_set.add(food)
            table_map[int(table)][food] += 1
        foods = sorted(food_set)
        tables = sorted(table_map.keys())
        res = [['Table'] + foods]
        for t in tables:
            row = [str(t)] + [str(table_map[t].get(f, 0)) for f in foods]
            res.append(row)
        return res
