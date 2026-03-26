typedef struct {
    long long counts[5];
    int denoms[5];
} ATM;

ATM* aTMCreate() {
    ATM *obj = (ATM *)calloc(1, sizeof(ATM));
    obj->denoms[0] = 20;
    obj->denoms[1] = 50;
    obj->denoms[2] = 100;
    obj->denoms[3] = 200;
    obj->denoms[4] = 500;
    return obj;
}

void aTMDeposit(ATM* obj, int* banknotesCount, int banknotesCountSize) {
    for (int i = 0; i < 5; i++) {
        obj->counts[i] += banknotesCount[i];
    }
}

int* aTMWithdraw(ATM* obj, int amount, int* retSize) {
    int *take = (int *)calloc(5, sizeof(int));
    *retSize = 5;
    long long remain = amount;
    for (int i = 4; i >= 0; i--) {
        long long use = remain / obj->denoms[i];
        if (use > obj->counts[i]) use = obj->counts[i];
        take[i] = (int)use;
        remain -= (long long)take[i] * obj->denoms[i];
    }
    if (remain > 0) {
        free(take);
        int *fail = (int *)malloc(sizeof(int));
        fail[0] = -1;
        *retSize = 1;
        return fail;
    }
    for (int i = 0; i < 5; i++) obj->counts[i] -= take[i];
    return take;
}

void aTMFree(ATM* obj) {
    free(obj);
}
