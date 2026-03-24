class Solution:
    def compress(self, chars: List[str]) -> int:
        write = i = 0
        while i < len(chars):
            j = i
            while j < len(chars) and chars[j] == chars[i]:
                j += 1
            chars[write] = chars[i]
            write += 1
            count = j - i
            if count > 1:
                for ch in str(count):
                    chars[write] = ch
                    write += 1
            i = j
        return write
