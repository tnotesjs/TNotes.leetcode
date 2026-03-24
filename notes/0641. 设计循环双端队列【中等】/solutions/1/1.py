class MyCircularDeque:
    def __init__(self, k: int):
        self.cap = k + 1
        self.arr = [0] * self.cap
        self.front = 0
        self.rear = 0

    def insertFront(self, value: int) -> bool:
        if self.isFull():
            return False
        self.front = (self.front - 1) % self.cap
        self.arr[self.front] = value
        return True

    def insertLast(self, value: int) -> bool:
        if self.isFull():
            return False
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.cap
        return True

    def deleteFront(self) -> bool:
        if self.isEmpty():
            return False
        self.front = (self.front + 1) % self.cap
        return True

    def deleteLast(self) -> bool:
        if self.isEmpty():
            return False
        self.rear = (self.rear - 1) % self.cap
        return True

    def getFront(self) -> int:
        return -1 if self.isEmpty() else self.arr[self.front]

    def getRear(self) -> int:
        return -1 if self.isEmpty() else self.arr[(self.rear - 1) % self.cap]

    def isEmpty(self) -> bool:
        return self.front == self.rear

    def isFull(self) -> bool:
        return (self.rear + 1) % self.cap == self.front
