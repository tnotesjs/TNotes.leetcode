class Solution:
    def findHighAccessEmployees(self, access_times: list[list[str]]) -> list[str]:
        from collections import defaultdict
        groups = defaultdict(list)
        for name, time in access_times:
            groups[name].append(int(time[:2]) * 60 + int(time[2:]))
        result = []
        for name, times in groups.items():
            times.sort()
            for i in range(2, len(times)):
                if times[i] - times[i - 2] < 60:
                    result.append(name)
                    break
        return result
