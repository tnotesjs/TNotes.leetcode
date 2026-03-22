class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # 找最短字符串
        min_str = min(strs, key=len)
        for i, c in enumerate(min_str):
            for s in strs:
                if s[i] != c:
                    return min_str[:i]
        return min_str
