char* complexNumberMultiply(char* num1, char* num2) {
    int a, b, c, d;
    sscanf(num1, "%d+%di", &a, &b);
    sscanf(num2, "%d+%di", &c, &d);
    char* res = (char*)malloc(64);
    sprintf(res, "%d+%di", a * c - b * d, a * d + b * c);
    return res;
}
