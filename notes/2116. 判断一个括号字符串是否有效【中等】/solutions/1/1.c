bool canBeValid(char* s, char* locked) {
    int n = strlen(s);
    if (n % 2 != 0) return false;
    int min = 0, max = 0;
    for (int i = 0; i < n; i++) {
        if (locked[i] == '0') {
            min--;
            max++;
        } else if (s[i] == '(') {
            min++;
            max++;
        } else {
            min--;
            max--;
        }
        if (max < 0) return false;
        if (min < 0) min = 0;
    }
    return min == 0;
}
