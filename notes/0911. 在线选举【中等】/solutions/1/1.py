class TopVotedCandidate:
    def __init__(self, persons: List[int], times: List[int]):
        self.times = times
        self.leaders = []
        from collections import defaultdict
        votes = defaultdict(int)
        lead = -1
        for p in persons:
            votes[p] += 1
            if votes[p] >= votes[lead]:
                lead = p
            self.leaders.append(lead)

    def q(self, t: int) -> int:
        import bisect
        idx = bisect.bisect_right(self.times, t) - 1
        return self.leaders[idx]
