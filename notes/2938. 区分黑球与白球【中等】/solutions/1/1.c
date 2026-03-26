long long minimumSteps(char* s) {
    long long ans = 0;
    int blacks = 0;
    for (int i = 0; s[i]; i++) {
        if (s[i] == '1') blacks++;
        else ans += blacks;
    }
    return ans;
}
