int maxRepeating(char* sequence, char* word) {
    int seqLen = strlen(sequence);
    int wordLen = strlen(word);
    int maxTimes = seqLen / wordLen;
    int ans = 0;

    char rep[10001] = "";
    for (int k = 1; k <= maxTimes; k++) {
        strcat(rep, word);
        if (strstr(sequence, rep) != NULL) {
            ans = k;
        } else {
            break;
        }
    }

    return ans;
}
