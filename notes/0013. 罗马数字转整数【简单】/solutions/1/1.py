class Solution:
    def romanToInt(self, s: str) -> int:
        mapping = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50,
            'C': 100, 'D': 500, 'M': 1000,
            'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90,
            'CD': 400, 'CM': 900,
        }
        result = 0
        i = 0
        while i < len(s):
            two = s[i:i+2]
            if two in mapping:  # 匹配双字符特殊情况
                result += mapping[two]
                i += 2
            else:               # 匹配单字符正常情况
                result += mapping[s[i]]
                i += 1
        return result
