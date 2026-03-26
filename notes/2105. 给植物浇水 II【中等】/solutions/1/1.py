class Solution:
    def minimumRefills(self, plants: List[int], capacityA: int, capacityB: int) -> int:
        a, b = capacityA, capacityB
        refills = 0
        left, right = 0, len(plants) - 1
        while left < right:
            if a < plants[left]:
                refills += 1
                a = capacityA
            a -= plants[left]
            left += 1
            if b < plants[right]:
                refills += 1
                b = capacityB
            b -= plants[right]
            right -= 1
        if left == right:
            if a >= b:
                if a < plants[left]:
                    refills += 1
            else:
                if b < plants[left]:
                    refills += 1
        return refills
