class Solution:
    def minProcessingTime(self, processorTime: list[int], tasks: list[int]) -> int:
        processorTime.sort()
        tasks.sort(reverse=True)
        return max(p + tasks[i * 4] for i, p in enumerate(processorTime))
