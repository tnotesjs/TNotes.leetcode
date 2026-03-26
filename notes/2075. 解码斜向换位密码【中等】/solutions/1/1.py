class Solution:
    def decodeCiphertext(self, encodedText: str, rows: int) -> str:
        if rows == 1:
            return encodedText
        cols = len(encodedText) // rows
        result = []
        for start in range(cols):
            for r in range(rows):
                if start + r < cols:
                    result.append(encodedText[r * cols + start + r])
        return ''.join(result).rstrip()
