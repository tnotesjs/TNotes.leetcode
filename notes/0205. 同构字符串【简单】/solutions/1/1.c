bool isIsomorphic(char* s, char* t) {
    // ASCII 字符集，用数组做双向映射；-1 表示尚未映射
    int s2t[256], t2s[256];
    for (int i = 0; i < 256; i++) {
        s2t[i] = -1;
        t2s[i] = -1;
    }
    for (int i = 0; s[i] != '\0'; i++) {
        unsigned char a = (unsigned char)s[i];
        unsigned char b = (unsigned char)t[i];
        if (s2t[a] == -1) {
            s2t[a] = b;
        } else if (s2t[a] != b) {
            return false;
        }
        if (t2s[b] == -1) {
            t2s[b] = a;
        } else if (t2s[b] != a) {
            return false;
        }
    }
    return true;
}
