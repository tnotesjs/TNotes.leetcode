char* getHint(char* secret, char* guess) {
    int bulls = 0, cows = 0;
    int count[10] = {0};
    for (int i = 0; secret[i]; i++) {
        if (secret[i] == guess[i]) {
            bulls++;
        } else {
            if (count[secret[i] - '0']++ < 0) cows++;
            if (count[guess[i] - '0']-- > 0) cows++;
        }
    }
    char* res = (char*)malloc(20);
    sprintf(res, "%dA%dB", bulls, cows);
    return res;
}
