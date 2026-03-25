int minInsertions(char* s) {
    int res = 0, open = 0, i = 0;
    while (s[i]) {
        if (s[i] == '(') {
            open++; i++;
        } else {
            if (s[i+1] == ')') i += 2;
            else { res++; i++; }
            if (open > 0) open--;
            else res++;
        }
    }
    res += open * 2;
    return res;
}
