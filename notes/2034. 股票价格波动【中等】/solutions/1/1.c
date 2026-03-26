typedef struct {
    int key;
    int val;
    UT_hash_handle hh;
} MapEntry2034;

typedef struct {
    MapEntry2034* map;
    int latest;
    int maxH[100001][2]; int maxSz;
    int minH[100001][2]; int minSz;
} StockPrice;

void swap2034(int a[2], int b[2]) {
    int t0 = a[0], t1 = a[1];
    a[0] = b[0]; a[1] = b[1];
    b[0] = t0; b[1] = t1;
}

void maxPush2034(StockPrice* obj, int p, int t) {
    obj->maxH[obj->maxSz][0] = p;
    obj->maxH[obj->maxSz][1] = t;
    int i = obj->maxSz++;
    while (i > 0) {
        int par = (i - 1) / 2;
        if (obj->maxH[i][0] > obj->maxH[par][0]) {
            swap2034(obj->maxH[i], obj->maxH[par]); i = par;
        } else break;
    }
}

void maxPop2034(StockPrice* obj) {
    obj->maxSz--;
    obj->maxH[0][0] = obj->maxH[obj->maxSz][0];
    obj->maxH[0][1] = obj->maxH[obj->maxSz][1];
    int i = 0;
    while (1) {
        int s = i, l = 2*i+1, r = 2*i+2;
        if (l < obj->maxSz && obj->maxH[l][0] > obj->maxH[s][0]) s = l;
        if (r < obj->maxSz && obj->maxH[r][0] > obj->maxH[s][0]) s = r;
        if (s != i) { swap2034(obj->maxH[i], obj->maxH[s]); i = s; } else break;
    }
}

void minPush2034(StockPrice* obj, int p, int t) {
    obj->minH[obj->minSz][0] = p;
    obj->minH[obj->minSz][1] = t;
    int i = obj->minSz++;
    while (i > 0) {
        int par = (i - 1) / 2;
        if (obj->minH[i][0] < obj->minH[par][0]) {
            swap2034(obj->minH[i], obj->minH[par]); i = par;
        } else break;
    }
}

void minPop2034(StockPrice* obj) {
    obj->minSz--;
    obj->minH[0][0] = obj->minH[obj->minSz][0];
    obj->minH[0][1] = obj->minH[obj->minSz][1];
    int i = 0;
    while (1) {
        int s = i, l = 2*i+1, r = 2*i+2;
        if (l < obj->minSz && obj->minH[l][0] < obj->minH[s][0]) s = l;
        if (r < obj->minSz && obj->minH[r][0] < obj->minH[s][0]) s = r;
        if (s != i) { swap2034(obj->minH[i], obj->minH[s]); i = s; } else break;
    }
}

int getPrice2034(StockPrice* obj, int ts) {
    MapEntry2034* e;
    HASH_FIND_INT(obj->map, &ts, e);
    return e ? e->val : -1;
}

StockPrice* stockPriceCreate() {
    StockPrice* obj = (StockPrice*)calloc(1, sizeof(StockPrice));
    return obj;
}

void stockPriceUpdate(StockPrice* obj, int timestamp, int price) {
    MapEntry2034* e;
    HASH_FIND_INT(obj->map, &timestamp, e);
    if (e) { e->val = price; }
    else {
        e = (MapEntry2034*)malloc(sizeof(MapEntry2034));
        e->key = timestamp; e->val = price;
        HASH_ADD_INT(obj->map, key, e);
    }
    if (timestamp >= obj->latest) obj->latest = timestamp;
    maxPush2034(obj, price, timestamp);
    minPush2034(obj, price, timestamp);
}

int stockPriceCurrent(StockPrice* obj) {
    return getPrice2034(obj, obj->latest);
}

int stockPriceMaximum(StockPrice* obj) {
    while (obj->maxH[0][0] != getPrice2034(obj, obj->maxH[0][1]))
        maxPop2034(obj);
    return obj->maxH[0][0];
}

int stockPriceMinimum(StockPrice* obj) {
    while (obj->minH[0][0] != getPrice2034(obj, obj->minH[0][1]))
        minPop2034(obj);
    return obj->minH[0][0];
}

void stockPriceFree(StockPrice* obj) {
    MapEntry2034 *e, *tmp;
    HASH_ITER(hh, obj->map, e, tmp) {
        HASH_DEL(obj->map, e); free(e);
    }
    free(obj);
}
