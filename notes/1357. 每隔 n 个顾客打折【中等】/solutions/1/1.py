class Cashier:
    def __init__(self, n: int, discount: int, products: list[int], prices: list[int]):
        self.n = n
        self.discount = discount
        self.count = 0
        self.price_map = dict(zip(products, prices))

    def getBill(self, product: list[int], amount: list[int]) -> float:
        self.count += 1
        total = sum(self.price_map[p] * a for p, a in zip(product, amount))
        if self.count % self.n == 0:
            total -= (self.discount * total) / 100
        return total
