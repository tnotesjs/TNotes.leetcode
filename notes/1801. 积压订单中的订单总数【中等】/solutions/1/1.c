#define MOD1801 1000000007

typedef struct { int price; int amount; } Order1801;

static void heapUp1801(Order1801* h, int i, int isMax) {
  while (i > 0) {
    int p = (i - 1) / 2;
    int cond = isMax ? (h[i].price > h[p].price) : (h[i].price < h[p].price);
    if (cond) { Order1801 t = h[i]; h[i] = h[p]; h[p] = t; i = p; }
    else break;
  }
}

static void heapDown1801(Order1801* h, int n, int i, int isMax) {
  while (1) {
    int m = i, l = 2*i+1, r = 2*i+2;
    if (l < n && (isMax ? h[l].price > h[m].price : h[l].price < h[m].price)) m = l;
    if (r < n && (isMax ? h[r].price > h[m].price : h[r].price < h[m].price)) m = r;
    if (m == i) break;
    Order1801 t = h[i]; h[i] = h[m]; h[m] = t; i = m;
  }
}

int getNumberOfBacklogOrders(int** orders, int ordersSize, int* ordersColSize) {
  Order1801* buy = (Order1801*)malloc(ordersSize * sizeof(Order1801));
  Order1801* sell = (Order1801*)malloc(ordersSize * sizeof(Order1801));
  int bSize = 0, sSize = 0;
  for (int i = 0; i < ordersSize; i++) {
    int price = orders[i][0], amount = orders[i][1], type = orders[i][2];
    if (type == 0) {
      while (amount > 0 && sSize > 0 && sell[0].price <= price) {
        int deal = amount < sell[0].amount ? amount : sell[0].amount;
        amount -= deal;
        sell[0].amount -= deal;
        if (sell[0].amount == 0) { sell[0] = sell[--sSize]; if (sSize) heapDown1801(sell, sSize, 0, 0); }
      }
      if (amount > 0) { buy[bSize] = (Order1801){price, amount}; heapUp1801(buy, bSize, 1); bSize++; }
    } else {
      while (amount > 0 && bSize > 0 && buy[0].price >= price) {
        int deal = amount < buy[0].amount ? amount : buy[0].amount;
        amount -= deal;
        buy[0].amount -= deal;
        if (buy[0].amount == 0) { buy[0] = buy[--bSize]; if (bSize) heapDown1801(buy, bSize, 0, 1); }
      }
      if (amount > 0) { sell[sSize] = (Order1801){price, amount}; heapUp1801(sell, sSize, 0); sSize++; }
    }
  }
  long long total = 0;
  for (int i = 0; i < bSize; i++) total = (total + buy[i].amount) % MOD1801;
  for (int i = 0; i < sSize; i++) total = (total + sell[i].amount) % MOD1801;
  free(buy); free(sell);
  return (int)total;
}
