// C 语言不适合此记忆化搜索 + 动态哈希题，建议使用 JS/PY
int shoppingOffers(int* price, int priceSize, int** special, int specialSize, int* specialColSize, int* needs, int needsSize) {
    int cost = 0;
    for (int i = 0; i < needsSize; i++) cost += needs[i] * price[i];
    for (int i = 0; i < specialSize; i++) {
        int valid = 1;
        int next[6];
        for (int j = 0; j < needsSize; j++) {
            next[j] = needs[j] - special[i][j];
            if (next[j] < 0) { valid = 0; break; }
        }
        if (valid) {
            int sub = special[i][needsSize] + shoppingOffers(price, priceSize, special, specialSize, specialColSize, next, needsSize);
            if (sub < cost) cost = sub;
        }
    }
    return cost;
}
