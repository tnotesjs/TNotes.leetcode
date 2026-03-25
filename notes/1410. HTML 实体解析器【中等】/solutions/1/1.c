char* entityParser(char* text) {
    int n = strlen(text);
    char* res = (char*)malloc(n + 1);
    int j = 0;
    const char* entities[] = {"&quot;", "&apos;", "&amp;", "&gt;", "&lt;", "&frasl;"};
    const char replacements[] = {'"', '\'', '&', '>', '<', '/'};
    const int lens[] = {6, 6, 5, 4, 4, 7};
    for (int i = 0; i < n; ) {
        if (text[i] == '&') {
            int matched = 0;
            for (int k = 0; k < 6; k++) {
                if (strncmp(text + i, entities[k], lens[k]) == 0) {
                    res[j++] = replacements[k];
                    i += lens[k];
                    matched = 1;
                    break;
                }
            }
            if (!matched) res[j++] = text[i++];
        } else {
            res[j++] = text[i++];
        }
    }
    res[j] = '\0';
    return res;
}
