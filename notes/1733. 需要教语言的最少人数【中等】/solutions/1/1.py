class Solution:
    def minimumTeachings(self, n: int, languages: list[list[int]], friendships: list[list[int]]) -> int:
        lang_set = [set(l) for l in languages]
        need_teach = set()
        for u, v in friendships:
            if not lang_set[u - 1] & lang_set[v - 1]:
                need_teach.add(u - 1)
                need_teach.add(v - 1)
        if not need_teach:
            return 0
        res = len(need_teach)
        for lang in range(1, n + 1):
            cnt = sum(1 for u in need_teach if lang not in lang_set[u])
            res = min(res, cnt)
        return res
