char* originalDigits(char* s) {
    int count[26] = {0};
    for (int i = 0; s[i]; i++) count[s[i] - 'a']++;
    int out[10] = {0};
    out[0] = count['z' - 'a'];
    out[2] = count['w' - 'a'];
    out[4] = count['u' - 'a'];
    out[6] = count['x' - 'a'];
    out[8] = count['g' - 'a'];
    out[3] = count['h' - 'a'] - out[8];
    out[5] = count['f' - 'a'] - out[4];
    out[7] = count['s' - 'a'] - out[6];
    out[1] = count['o' - 'a'] - out[0] - out[2] - out[4];
    out[9] = count['i' - 'a'] - out[5] - out[6] - out[8];
    int total = 0;
    for (int i = 0; i < 10; i++) total += out[i];
    char* res = (char*)malloc(total + 1);
    int idx = 0;
    for (int i = 0; i <= 9; i++)
        for (int j = 0; j < out[i]; j++) res[idx++] = '0' + i;
    res[idx] = '\0';
    return res;
}
