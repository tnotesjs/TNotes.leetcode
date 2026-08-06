class Solution:
    def isHappy(self, n: int) -> bool:
        def getSumOfSquares(num: int) -> int:
            s = 0
            while num > 0:
                digit = num % 10
                s += digit * digit
                num //= 10
            return s

        slow = n
        fast = getSumOfSquares(n)
        # 快指针一次走两步，慢指针一次走一步；相遇则有环
        while fast != 1 and slow != fast:
            slow = getSumOfSquares(slow)
            fast = getSumOfSquares(getSumOfSquares(fast))
        return fast == 1
