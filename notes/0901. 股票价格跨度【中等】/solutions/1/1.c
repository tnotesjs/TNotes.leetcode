typedef struct {
    int prices[10001];
    int spans[10001];
    int top;
} StockSpanner;

StockSpanner* stockSpannerCreate() {
    StockSpanner* obj = (StockSpanner*)malloc(sizeof(StockSpanner));
    obj->top = -1;
    return obj;
}

int stockSpannerNext(StockSpanner* obj, int price) {
    int span = 1;
    while (obj->top >= 0 && obj->prices[obj->top] <= price) {
        span += obj->spans[obj->top];
        obj->top--;
    }
    obj->top++;
    obj->prices[obj->top] = price;
    obj->spans[obj->top] = span;
    return span;
}

void stockSpannerFree(StockSpanner* obj) { free(obj); }
