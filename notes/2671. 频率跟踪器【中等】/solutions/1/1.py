class FrequencyTracker:
    def __init__(self):
        self.num_count = {}
        self.freq_count = {}

    def add(self, number: int) -> None:
        old_freq = self.num_count.get(number, 0)
        if old_freq > 0:
            self.freq_count[old_freq] -= 1
            if self.freq_count[old_freq] == 0:
                del self.freq_count[old_freq]
        new_freq = old_freq + 1
        self.num_count[number] = new_freq
        self.freq_count[new_freq] = self.freq_count.get(new_freq, 0) + 1

    def deleteOne(self, number: int) -> None:
        old_freq = self.num_count.get(number, 0)
        if old_freq == 0:
            return
        self.freq_count[old_freq] -= 1
        if self.freq_count[old_freq] == 0:
            del self.freq_count[old_freq]
        new_freq = old_freq - 1
        if new_freq > 0:
            self.num_count[number] = new_freq
            self.freq_count[new_freq] = self.freq_count.get(new_freq, 0) + 1
        else:
            del self.num_count[number]

    def hasFrequency(self, frequency: int) -> bool:
        return self.freq_count.get(frequency, 0) > 0
