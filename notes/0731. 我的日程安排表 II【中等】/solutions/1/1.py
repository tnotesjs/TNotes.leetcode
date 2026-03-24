class MyCalendarTwo:
    def __init__(self):
        self.events = []
        self.overlaps = []

    def book(self, start: int, end: int) -> bool:
        for s, e in self.overlaps:
            if start < e and end > s:
                return False
        for s, e in self.events:
            if start < e and end > s:
                self.overlaps.append((max(start, s), min(end, e)))
        self.events.append((start, end))
        return True
