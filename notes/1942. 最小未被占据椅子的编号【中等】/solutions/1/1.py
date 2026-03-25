import heapq

class Solution:
    def smallestChair(self, times: list[list[int]], targetFriend: int) -> int:
        order = sorted(range(len(times)), key=lambda i: times[i][0])
        avail = []  # min-heap of available chairs
        leaving = []  # min-heap of (leave_time, chair)
        next_chair = 0
        for idx in order:
            arrive, leave = times[idx]
            while leaving and leaving[0][0] <= arrive:
                _, c = heapq.heappop(leaving)
                heapq.heappush(avail, c)
            if avail:
                chair = heapq.heappop(avail)
            else:
                chair = next_chair
                next_chair += 1
            if idx == targetFriend:
                return chair
            heapq.heappush(leaving, (leave, chair))
        return -1
