import threading

class FizzBuzz:
    def __init__(self, n: int):
        self.n = n
        self.current = 1
        self.cond = threading.Condition()

    def fizz(self, printFizz):
        while True:
            with self.cond:
                while self.current <= self.n and not (self.current % 3 == 0 and self.current % 5 != 0):
                    self.cond.wait()
                if self.current > self.n:
                    return
                printFizz()
                self.current += 1
                self.cond.notify_all()

    def buzz(self, printBuzz):
        while True:
            with self.cond:
                while self.current <= self.n and not (self.current % 5 == 0 and self.current % 3 != 0):
                    self.cond.wait()
                if self.current > self.n:
                    return
                printBuzz()
                self.current += 1
                self.cond.notify_all()

    def fizzbuzz(self, printFizzBuzz):
        while True:
            with self.cond:
                while self.current <= self.n and not (self.current % 15 == 0):
                    self.cond.wait()
                if self.current > self.n:
                    return
                printFizzBuzz()
                self.current += 1
                self.cond.notify_all()

    def number(self, printNumber):
        while True:
            with self.cond:
                while self.current <= self.n and not (self.current % 3 != 0 and self.current % 5 != 0):
                    self.cond.wait()
                if self.current > self.n:
                    return
                printNumber(self.current)
                self.current += 1
                self.cond.notify_all()
