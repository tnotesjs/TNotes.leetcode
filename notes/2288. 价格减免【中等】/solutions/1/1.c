char* discountPrices(char* sentence, int discount) {
    char* res = (char*)malloc(200001);
    res[0] = '\0';
    char* token = strtok(sentence, " ");
    int first = 1;
    while (token) {
        if (!first) strcat(res, " ");
        first = 0;
        if (token[0] == '$' && strlen(token) > 1) {
            int valid = 1;
            for (int i = 1; token[i]; i++) {
                if (token[i] < '0' || token[i] > '9') { valid = 0; break; }
            }
            if (valid) {
                double price = atof(token + 1) * (100.0 - discount) / 100.0;
                char buf[50];
                sprintf(buf, "$%.2f", price);
                strcat(res, buf);
            } else {
                strcat(res, token);
            }
        } else {
            strcat(res, token);
        }
        token = strtok(NULL, " ");
    }
    return res;
}
