#include <stdlib.h>
#include <math.h>

static int g_ans;
static int g_target;

void dfs1774(int* toppingCosts, int toppingCostsSize, int idx, int cost) {
  if (abs(cost - g_target) < abs(g_ans - g_target) ||
      (abs(cost - g_target) == abs(g_ans - g_target) && cost < g_ans)) {
    g_ans = cost;
  }
  if (idx == toppingCostsSize || cost > g_target) return;
  dfs1774(toppingCosts, toppingCostsSize, idx + 1, cost);
  dfs1774(toppingCosts, toppingCostsSize, idx + 1, cost + toppingCosts[idx]);
  dfs1774(toppingCosts, toppingCostsSize, idx + 1, cost + toppingCosts[idx] * 2);
}

int closestCost(int* baseCosts, int baseCostsSize, int* toppingCosts, int toppingCostsSize, int target) {
  g_ans = baseCosts[0];
  g_target = target;
  for (int i = 0; i < baseCostsSize; i++) {
    dfs1774(toppingCosts, toppingCostsSize, 0, baseCosts[i]);
  }
  return g_ans;
}
