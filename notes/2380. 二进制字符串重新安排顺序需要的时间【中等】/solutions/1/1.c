int secondsToRemoveOccurrences(char* s) {
    int seconds = 0, zeros = 0;
    for (int i = 0; s[i]; i++) {
        if (s[i] == '0') {
            zeros++;
        } else if (zeros > 0) {
            seconds = seconds + 1 > zeros ? seconds + 1 : zeros;
        }
    }
    return seconds;
}
