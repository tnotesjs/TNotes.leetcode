import threading

class H2O:
    def __init__(self):
        self.h_sem = threading.Semaphore(2)
        self.o_sem = threading.Semaphore(0)
        self.barrier = threading.Barrier(3)

    def hydrogen(self, releaseHydrogen):
        self.h_sem.acquire()
        releaseHydrogen()
        self.barrier.wait()
        self.h_sem.release()

    def oxygen(self, releaseOxygen):
        self.o_sem.acquire()
        releaseOxygen()
        self.barrier.wait()
        self.o_sem.release()
