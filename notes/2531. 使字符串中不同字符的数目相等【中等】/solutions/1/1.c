bool isItPossible(char* word1, char* word2) {
    int cnt1[26] = {0}, cnt2[26] = {0};
    for (int i = 0; word1[i]; i++) cnt1[word1[i] - 'a']++;
    for (int i = 0; word2[i]; i++) cnt2[word2[i] - 'a']++;

    for (int i = 0; i < 26; i++) {
        if (cnt1[i] == 0) continue;
        for (int j = 0; j < 26; j++) {
            if (cnt2[j] == 0) continue;
            cnt1[i]--; cnt1[j]++;
            cnt2[j]--; cnt2[i]++;
            int d1 = 0, d2 = 0;
            for (int k = 0; k < 26; k++) {
                if (cnt1[k] > 0) d1++;
                if (cnt2[k] > 0) d2++;
            }
            if (d1 == d2) return true;
            cnt1[i]++; cnt1[j]--;
            cnt2[j]++; cnt2[i]--;
        }
    }
    return false;
}
