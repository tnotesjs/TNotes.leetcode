class Solution:
    def circularArrayLoop(self, nums: List[int]) -> bool:
        n = len(nums)
        def nxt(i):
            return (i + nums[i]) % n
        for i in range(n):
            if nums[i] == 0:
                continue
            slow = fast = i
            while nums[nxt(fast)] * nums[i] > 0 and nums[nxt(nxt(fast))] * nums[i] > 0:
                slow = nxt(slow)
                fast = nxt(nxt(fast))
                if slow == fast:
                    if slow == nxt(slow):
                        break
                    return True
            j = i
            while nums[j] * nums[i] > 0:
                tmp = nxt(j)
                nums[j] = 0
                j = tmp
        return False
