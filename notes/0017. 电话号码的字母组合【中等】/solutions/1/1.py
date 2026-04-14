class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []

        phone_map = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }
        ans = []

        def backtrack(index: int, path: str) -> None:
            if index == len(digits):
                ans.append(path)
                return
            for ch in phone_map[digits[index]]:
                backtrack(index + 1, path + ch)

        backtrack(0, "")
        return ans
