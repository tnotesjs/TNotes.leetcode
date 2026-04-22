class Solution:
    def repeatedStringMatch(self, a: str, b: str) -> int:
        a_len = len(a)
        b_len = len(b)
        need = (b_len + a_len - 1) // a_len
        next_arr = self._build_next(b)

        if self._kmp_search_repeated(a, b, need, next_arr):
            return need
        if self._kmp_search_repeated(a, b, need + 1, next_arr):
            return need + 1

        return -1

    def _build_next(self, pattern: str) -> list[int]:
        next_arr = [0] * len(pattern)

        j = 0
        for i in range(1, len(pattern)):
            while j > 0 and pattern[i] != pattern[j]:
                j = next_arr[j - 1]
            if pattern[i] == pattern[j]:
                j += 1
            next_arr[i] = j

        return next_arr

    def _kmp_search_repeated(
        self, a: str, pattern: str, repeat_count: int, next_arr: list[int]
    ) -> bool:
        total_len = len(a) * repeat_count
        j = 0

        for i in range(total_len):
            ch = a[i % len(a)]
            while j > 0 and ch != pattern[j]:
                j = next_arr[j - 1]
            if ch == pattern[j]:
                j += 1
            if j == len(pattern):
                return True

        return False
