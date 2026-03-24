bool checkValidString(char* s) {
    int lo = 0, hi = 0;
    for (int i = 0; s[i]; i++) {
        if (s[i] == '(') { lo++; hi++; }
        else if (s[i] == ')') { lo--; hi--; }
        else { lo--; hi++; }
        if (hi < 0) return false;
        if (lo < 0) lo = 0;
    }
    return lo == 0;
}
