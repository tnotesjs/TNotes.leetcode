int compress(char* chars, int charsSize) {
    int write = 0, i = 0;
    while (i < charsSize) {
        int j = i;
        while (j < charsSize && chars[j] == chars[i]) j++;
        chars[write++] = chars[i];
        int count = j - i;
        if (count > 1) {
            char buf[12];
            sprintf(buf, "%d", count);
            for (int k = 0; buf[k]; k++) chars[write++] = buf[k];
        }
        i = j;
    }
    return write;
}
