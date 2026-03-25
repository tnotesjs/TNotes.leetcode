int totalFruit(int* fruits, int fruitsSize) {
    int count[100001];
    memset(count, 0, sizeof(count));
    int res = 0, left = 0, types = 0;
    for (int right = 0; right < fruitsSize; right++) {
        if (count[fruits[right]]++ == 0) types++;
        while (types > 2) {
            if (--count[fruits[left]] == 0) types--;
            left++;
        }
        int len = right - left + 1;
        if (len > res) res = len;
    }
    return res;
}
