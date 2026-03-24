int numRabbits(int* answers, int answersSize) {
    int count[1000] = {0};
    for (int i = 0; i < answersSize; i++) count[answers[i]]++;
    int res = 0;
    for (int i = 0; i < 1000; i++) {
        if (count[i] > 0) {
            int group = i + 1;
            res += ((count[i] + group - 1) / group) * group;
        }
    }
    return res;
}
