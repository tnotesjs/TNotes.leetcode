class Solution:
    def videoStitching(self, clips: list[list[int]], time: int) -> int:
        max_end = [0] * (time + 1)
        for s, e in clips:
            if s <= time:
                max_end[s] = max(max_end[s], e)
        count = cur_end = farthest = 0
        for i in range(time):
            farthest = max(farthest, max_end[i])
            if i == cur_end:
                if farthest == cur_end:
                    return -1
                count += 1
                cur_end = farthest
        return count
