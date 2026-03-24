class NumArray:
    def __init__(self, nums: List[int]):
        self.n = len(nums)
        self.nums = [0] * self.n
        self.tree = [0] * (self.n + 1)
        for i, v in enumerate(nums):
            self.update(i, v)

    def update(self, index: int, val: int) -> None:
        delta = val - self.nums[index]
        self.nums[index] = val
        i = index + 1
        while i <= self.n:
            self.tree[i] += delta
            i += i & (-i)

    def sumRange(self, left: int, right: int) -> int:
        def query(i):
            s = 0
            while i > 0:
                s += self.tree[i]
                i -= i & (-i)
            return s
        return query(right + 1) - query(left)
