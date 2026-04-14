char* intToRoman(int num) {
    int vals[] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    char* syms[] = {"M",  "CM", "D",  "CD", "C",  "XC", "L",
                    "XL", "X",  "IX", "V",  "IV", "I"};
    int n = 13;

    char* ans = (char*)malloc(20 * sizeof(char));
    ans[0] = '\0';
    for (int i = 0; i < n; i++) {
        while (num >= vals[i]) {
            strcat(ans, syms[i]);
            num -= vals[i];
        }
    }
    return ans;
}
