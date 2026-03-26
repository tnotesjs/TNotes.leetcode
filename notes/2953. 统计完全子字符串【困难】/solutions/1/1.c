int countSegment(char* word, int lo, int hi, int k) {
    int count = 0, len = hi - lo;
    for (int c = 1; c <= 26; c++) {
        int win = c * k;
        if (win > len) break;
        int freq[26] = {0}, valid = 0;
        for (int i = lo; i < lo + win; i++) {
            int ch = word[i] - 'a';
            if (freq[ch] == k) valid--;
            freq[ch]++;
            if (freq[ch] == k) valid++;
        }
        if (valid == c) count++;
        for (int i = lo + win; i < hi; i++) {
            int add = word[i] - 'a';
            if (freq[add] == k) valid--;
            freq[add]++;
            if (freq[add] == k) valid++;
            int rem = word[i - win] - 'a';
            if (freq[rem] == k) valid--;
            freq[rem]--;
            if (freq[rem] == k) valid++;
            if (valid == c) count++;
        }
    }
    return count;
}

int countCompleteSubstrings(char* word, int k) {
    int n = strlen(word);
    int total = 0, start = 0;
    for (int end = 0; end <= n; end++) {
        if (end == n || (end > start && abs(word[end] - word[end - 1]) > 2)) {
            total += countSegment(word, start, end, k);
            start = end;
        }
    }
    return total;
}
