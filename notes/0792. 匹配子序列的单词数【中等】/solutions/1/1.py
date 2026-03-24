class Solution:
    def numMatchingSubseq(self, s: str, words: List[str]) -> int:
        from collections import defaultdict
        buckets = defaultdict(list)
        for word in words:
            buckets[word[0]].append(iter(word[1:]))
        res = 0
        for c in s:
            bucket = buckets.pop(c, [])
            for it in bucket:
                nxt = next(it, None)
                if nxt is None:
                    res += 1
                else:
                    buckets[nxt].append(it)
        return res
