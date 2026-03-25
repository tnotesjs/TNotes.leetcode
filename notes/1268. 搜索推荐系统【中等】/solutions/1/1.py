class Solution:
    def suggestedProducts(self, products: list[str], searchWord: str) -> list[list[str]]:
        products.sort()
        res = []
        left, right = 0, len(products) - 1
        for i, c in enumerate(searchWord):
            while left <= right and (len(products[left]) <= i or products[left][i] < c):
                left += 1
            while left <= right and (len(products[right]) <= i or products[right][i] > c):
                right -= 1
            cnt = min(3, right - left + 1)
            res.append([products[left + j] for j in range(max(0, cnt))])
        return res
