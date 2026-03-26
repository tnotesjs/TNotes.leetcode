/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* executeInstructions(int n, int* startPos, int startPosSize, char* s, int* returnSize) {
    int m = strlen(s);
    int* res = (int*)malloc(sizeof(int) * m);
    *returnSize = m;
    for (int i = 0; i < m; i++) {
        int r = startPos[0], c = startPos[1], count = 0;
        for (int j = i; j < m; j++) {
            if (s[j] == 'U') r--;
            else if (s[j] == 'D') r++;
            else if (s[j] == 'L') c--;
            else c++;
            if (r < 0 || r >= n || c < 0 || c >= n) break;
            count++;
        }
        res[i] = count;
    }
    return res;
}
