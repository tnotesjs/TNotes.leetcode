from sortedcontainers import SortedList


class NumberContainers:

    def __init__(self):
        self.idx_to_num: dict[int, int] = {}
        self.num_to_idxs: dict[int, SortedList] = {}

    def change(self, index: int, number: int) -> None:
        if index in self.idx_to_num:
            old = self.idx_to_num[index]
            self.num_to_idxs[old].remove(index)
        self.idx_to_num[index] = number
        if number not in self.num_to_idxs:
            self.num_to_idxs[number] = SortedList()
        self.num_to_idxs[number].add(index)

    def find(self, number: int) -> int:
        if number not in self.num_to_idxs or len(self.num_to_idxs[number]) == 0:
            return -1
        return self.num_to_idxs[number][0]
