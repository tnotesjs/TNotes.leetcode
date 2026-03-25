import heapq

class Solution:
    def getNumberOfBacklogOrders(self, orders: list[list[int]]) -> int:
        MOD = 10 ** 9 + 7
        buy = []   # max heap (store -price)
        sell = []  # min heap
        for price, amount, typ in orders:
            if typ == 0:  # buy
                while amount > 0 and sell and sell[0][0] <= price:
                    sp, sa = sell[0]
                    deal = min(amount, sa)
                    amount -= deal
                    sa -= deal
                    if sa == 0:
                        heapq.heappop(sell)
                    else:
                        sell[0] = [sp, sa]
                if amount > 0:
                    heapq.heappush(buy, [-price, amount])
            else:  # sell
                while amount > 0 and buy and -buy[0][0] >= price:
                    bp, ba = buy[0]
                    deal = min(amount, ba)
                    amount -= deal
                    ba -= deal
                    if ba == 0:
                        heapq.heappop(buy)
                    else:
                        buy[0] = [bp, ba]
                if amount > 0:
                    heapq.heappush(sell, [price, amount])
        total = sum(a for _, a in buy) + sum(a for _, a in sell)
        return total % MOD
