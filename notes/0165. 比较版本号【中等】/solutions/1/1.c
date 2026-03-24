int compareVersion(char* version1, char* version2) {
    int i = 0, j = 0;
    int len1 = strlen(version1), len2 = strlen(version2);
    while (i < len1 || j < len2) {
        int n1 = 0, n2 = 0;
        while (i < len1 && version1[i] != '.') {
            n1 = n1 * 10 + (version1[i] - '0');
            i++;
        }
        while (j < len2 && version2[j] != '.') {
            n2 = n2 * 10 + (version2[j] - '0');
            j++;
        }
        if (n1 > n2) return 1;
        if (n1 < n2) return -1;
        i++;
        j++;
    }
    return 0;
}
