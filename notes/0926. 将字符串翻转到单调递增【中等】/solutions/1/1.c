int minFlipsMonoIncr(char* s) {
    int ones = 0, flips = 0;
    for (int i = 0; s[i]; i++) {
        if (s[i] == '1') {
            ones++;
        } else {
            flips = flips + 1 < ones ? flips + 1 : ones;
        }
    }
    return flips;
}
