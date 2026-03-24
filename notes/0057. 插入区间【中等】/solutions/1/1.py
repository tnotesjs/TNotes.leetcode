class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        result = []
        i = 0

        # 添加所有在 newInterval 左侧不重叠的区间
        while i < len(intervals) and intervals[i][1] < newInterval[0]:
            result.append(intervals[i])
            i += 1

        # 合并所有与 newInterval 重叠的区间
        while i < len(intervals) and intervals[i][0] <= newInterval[1]:
            newInterval[0] = min(newInterval[0], intervals[i][0])
            newInterval[1] = max(newInterval[1], intervals[i][1])
            i += 1
        result.append(newInterval)

        # 添加所有在 newInterval 右侧不重叠的区间
        while i < len(intervals):
            result.append(intervals[i])
            i += 1

        return result
