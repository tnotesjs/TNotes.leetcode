int titleToNumber(char* columnTitle) {
    int result = 0;
    for (int i = 0; columnTitle[i] != '\0'; i++) {
        // A=1 ... Z=26；从左到右累乘 26
        result = result * 26 + (columnTitle[i] - 'A' + 1);
    }
    return result;
}
