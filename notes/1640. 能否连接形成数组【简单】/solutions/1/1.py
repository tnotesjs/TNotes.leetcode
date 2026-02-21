class Solution:
    def canFormArray(self, arr: List[int], pieces: List[List[int]]) -> bool:
        # 将每个片段的首元素映射到对应片段
        map = {p[0]: p for p in pieces}

        i = 0
        while i < len(arr):
            start = arr[i]
            if start not in map:
                return False
            segment = map[start]
            for j in range(len(segment)):
                if arr[i + j] != segment[j]:
                    return False
            i += len(segment)

        return True
