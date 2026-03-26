class Solution:
    def countCompleteSubstrings(self, word: str, k: int) -> int:
        def count_segment(lo: int, hi: int) -> int:
            count = 0
            length = hi - lo
            for c in range(1, 27):
                win = c * k
                if win > length:
                    break
                freq = [0] * 26
                valid = 0
                for i in range(lo, lo + win):
                    ch = ord(word[i]) - 97
                    if freq[ch] == k:
                        valid -= 1
                    freq[ch] += 1
                    if freq[ch] == k:
                        valid += 1
                if valid == c:
                    count += 1
                for i in range(lo + win, hi):
                    add = ord(word[i]) - 97
                    if freq[add] == k:
                        valid -= 1
                    freq[add] += 1
                    if freq[add] == k:
                        valid += 1
                    rem = ord(word[i - win]) - 97
                    if freq[rem] == k:
                        valid -= 1
                    freq[rem] -= 1
                    if freq[rem] == k:
                        valid += 1
                    if valid == c:
                        count += 1
            return count

        n = len(word)
        total = 0
        start = 0
        for end in range(n + 1):
            if end == n or (end > start and abs(ord(word[end]) - ord(word[end - 1])) > 2):
                total += count_segment(start, end)
                start = end
        return total
