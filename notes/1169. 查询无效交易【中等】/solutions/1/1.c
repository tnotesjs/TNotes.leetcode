char** invalidTransactions(char** transactions, int transactionsSize, int* returnSize) {
    char names[1000][11], cities[1000][11];
    int times[1000], amounts[1000];
    for (int i = 0; i < transactionsSize; i++) {
        sscanf(transactions[i], "%[^,],%d,%d,%s", names[i], &times[i], &amounts[i], cities[i]);
    }
    int invalid[1000];
    memset(invalid, 0, sizeof(invalid));
    for (int i = 0; i < transactionsSize; i++) {
        if (amounts[i] > 1000) invalid[i] = 1;
        for (int j = i + 1; j < transactionsSize; j++) {
            if (strcmp(names[i], names[j]) == 0 &&
                strcmp(cities[i], cities[j]) != 0 &&
                abs(times[i] - times[j]) <= 60) {
                invalid[i] = 1;
                invalid[j] = 1;
            }
        }
    }
    *returnSize = 0;
    char** res = (char**)malloc(sizeof(char*) * transactionsSize);
    for (int i = 0; i < transactionsSize; i++) {
        if (invalid[i]) res[(*returnSize)++] = transactions[i];
    }
    return res;
}
