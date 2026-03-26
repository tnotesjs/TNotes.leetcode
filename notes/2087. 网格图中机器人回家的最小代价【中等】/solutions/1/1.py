class Solution:
    def minCost(self, startPos: list[int], homePos: list[int], rowCosts: list[int], colCosts: list[int]) -> int:
        sr, sc = startPos
        hr, hc = homePos
        cost = 0
        if sr < hr:
            cost += sum(rowCosts[sr + 1:hr + 1])
        else:
            cost += sum(rowCosts[hr:sr])
        if sc < hc:
            cost += sum(colCosts[sc + 1:hc + 1])
        else:
            cost += sum(colCosts[hc:sc])
        return cost
