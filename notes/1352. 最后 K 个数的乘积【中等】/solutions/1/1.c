typedef struct {
    double* prefix;
    int size;
    int cap;
} ProductOfNumbers;

ProductOfNumbers* productOfNumbersCreate() {
    ProductOfNumbers* obj = malloc(sizeof(ProductOfNumbers));
    obj->cap = 40001;
    obj->prefix = malloc(sizeof(double) * obj->cap);
    obj->prefix[0] = 1;
    obj->size = 1;
    return obj;
}

void productOfNumbersAdd(ProductOfNumbers* obj, int num) {
    if (num == 0) {
        obj->prefix[0] = 1;
        obj->size = 1;
    } else {
        obj->prefix[obj->size] = obj->prefix[obj->size - 1] * num;
        obj->size++;
    }
}

int productOfNumbersGetProduct(ProductOfNumbers* obj, int k) {
    if (k >= obj->size) return 0;
    return (int)(obj->prefix[obj->size - 1] / obj->prefix[obj->size - 1 - k]);
}

void productOfNumbersFree(ProductOfNumbers* obj) {
    free(obj->prefix);
    free(obj);
}
