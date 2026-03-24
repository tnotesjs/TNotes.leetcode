int characterReplacement(char* s, int k) {
    int count[26] = {0};
    int left = 0, maxFreq = 0, res = 0, len = strlen(s);
    for (int right = 0; right < len; right++) {
        count[s[right] - 'A']++;
        if (count[s[right] - 'A'] > maxFreq) maxFreq = count[s[right] - 'A'];
        if (right - left + 1 - maxFreq > k) {
            count[s[left] - 'A']--;
            left++;
        }
        if (right - left + 1 > res) res = right - left + 1;
    }
    return res;
}
