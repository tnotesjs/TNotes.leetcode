int minFlips(char* target) {
    int flips = 0;
    char current = '0';
    for (int i = 0; target[i]; i++) {
        if (target[i] != current) {
            flips++;
            current = target[i];
        }
    }
    return flips;
}
