class Solution:
    def numSmallerByFrequency(self, queries: list[str], words: list[str]) -> list[int]:
        import bisect

        def f(s):
            return s.count(min(s))

        wf = sorted(f(w) for w in words)
        return [len(wf) - bisect.bisect_right(wf, f(q)) for q in queries]
