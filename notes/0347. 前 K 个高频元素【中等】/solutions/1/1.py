class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = Counter(nums)
        buckets = [[] for _ in range(len(nums) + 1)]
        for num, freq in count.items():
            buckets[freq].append(num)
        res = []
        for i in range(len(buckets) - 1, -1, -1):
            res.extend(buckets[i])
            if len(res) >= k:
                return res[:k]
        return res[:k]
