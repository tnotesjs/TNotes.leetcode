class Solution:
    def sortVowels(self, s: str) -> str:
        vowels = set('aeiouAEIOU')
        v_arr = sorted(c for c in s if c in vowels)
        res = list(s)
        vi = 0
        for i in range(len(res)):
            if res[i] in vowels:
                res[i] = v_arr[vi]
                vi += 1
        return ''.join(res)
