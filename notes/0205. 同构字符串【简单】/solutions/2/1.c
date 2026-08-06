int firstIndex(char* str, char c, int end) {
    for (int i = 0; i <= end; i++) {
        if (str[i] == c) return i;
    }
    return -1;
}

bool isIsomorphic(char* s, char* t) {
    for (int i = 0; s[i] != '\0'; i++) {
        // 同构 ⇒ 当前字符在各自串中首次出现的下标相同
        if (firstIndex(s, s[i], i) != firstIndex(t, t[i], i)) {
            return false;
        }
    }
    return true;
}
