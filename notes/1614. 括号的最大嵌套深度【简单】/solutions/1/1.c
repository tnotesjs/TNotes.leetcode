int maxDepth(char* s) {
    int cur = 0;
    int ans = 0;
    
    for (int i = 0; s[i] != '\0'; i++) {
        if (s[i] == '(') {
            cur++;
            if (cur > ans) {
                ans = cur;
            }
        } else if (s[i] == ')') {
            cur--;
        }
    }
    
    return ans;
}
