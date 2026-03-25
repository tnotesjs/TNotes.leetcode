typedef struct {
    int n;
    int discount;
    int count;
    int prices[201];
    int products[201];
    int pSize;
} Cashier;

Cashier* cashierCreate(int n, int discount, int* products, int productsSize, int* prices, int pricesSize) {
    Cashier* obj = malloc(sizeof(Cashier));
    obj->n = n;
    obj->discount = discount;
    obj->count = 0;
    obj->pSize = productsSize;
    for (int i = 0; i < productsSize; i++) {
        obj->products[i] = products[i];
        obj->prices[i] = prices[i];
    }
    return obj;
}

double cashierGetBill(Cashier* obj, int* product, int productSize, int* amount, int amountSize) {
    obj->count++;
    double total = 0;
    for (int i = 0; i < productSize; i++) {
        for (int j = 0; j < obj->pSize; j++) {
            if (obj->products[j] == product[i]) {
                total += (double)obj->prices[j] * amount[i];
                break;
            }
        }
    }
    if (obj->count % obj->n == 0) {
        total -= (obj->discount * total) / 100.0;
    }
    return total;
}

void cashierFree(Cashier* obj) { free(obj); }
