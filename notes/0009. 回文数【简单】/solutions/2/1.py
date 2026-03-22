class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        original_num = x
        result_num = 0
        while x != 0:
            result_num = result_num * 10 + x % 10
            x //= 10
        return original_num == result_num
