bool makeStringsEqual(char* s, char* target) {
    int hasOne_s = 0, hasOne_t = 0;
    for (int i = 0; s[i]; i++) if (s[i] == '1') hasOne_s = 1;
    for (int i = 0; target[i]; i++) if (target[i] == '1') hasOne_t = 1;
    return hasOne_s == hasOne_t;
}
