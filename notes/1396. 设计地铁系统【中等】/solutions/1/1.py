class UndergroundSystem:
    def __init__(self) -> None:
        self.check_ins: dict[int, tuple[str, int]] = {}
        self.routes: dict[str, tuple[int, int]] = {}

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.check_ins[id] = (stationName, t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        start_station, start_time = self.check_ins.pop(id)
        key = f"{start_station}->{stationName}"
        total, count = self.routes.get(key, (0, 0))
        self.routes[key] = (total + t - start_time, count + 1)

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        total, count = self.routes[f"{startStation}->{endStation}"]
        return total / count
