bool isIPv4(char* s) {
    int parts = 0;
    char* p = s;
    while (*p) {
        if (!(*p >= '0' && *p <= '9')) return false;
        int num = 0, len = 0;
        while (*p >= '0' && *p <= '9') {
            num = num * 10 + (*p - '0');
            p++; len++;
        }
        if (len == 0 || len > 3 || num > 255) return false;
        if (len > 1 && *(p - len) == '0') return false;
        parts++;
        if (*p == '.') p++;
        else if (*p != '\0') return false;
    }
    return parts == 4 && *(p - 1) != '.';
}

bool isIPv6(char* s) {
    int parts = 0;
    char* p = s;
    while (*p) {
        int len = 0;
        while ((*p >= '0' && *p <= '9') || (*p >= 'a' && *p <= 'f') || (*p >= 'A' && *p <= 'F')) {
            p++; len++;
        }
        if (len == 0 || len > 4) return false;
        parts++;
        if (*p == ':') p++;
        else if (*p != '\0') return false;
    }
    return parts == 8 && *(p - 1) != ':';
}

char* validIPAddress(char* queryIP) {
    if (strchr(queryIP, '.') && isIPv4(queryIP)) return "IPv4";
    if (strchr(queryIP, ':') && isIPv6(queryIP)) return "IPv6";
    return "Neither";
}
