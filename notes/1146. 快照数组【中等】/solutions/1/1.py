class SnapshotArray:
    def __init__(self, length: int):
        self.snap_id = 0
        self.data = [[[0, 0]] for _ in range(length)]

    def set(self, index: int, val: int) -> None:
        arr = self.data[index]
        if arr[-1][0] == self.snap_id:
            arr[-1][1] = val
        else:
            arr.append([self.snap_id, val])

    def snap(self) -> int:
        self.snap_id += 1
        return self.snap_id - 1

    def get(self, index: int, snap_id: int) -> int:
        arr = self.data[index]
        lo, hi = 0, len(arr) - 1
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if arr[mid][0] <= snap_id:
                lo = mid
            else:
                hi = mid - 1
        return arr[lo][1]
