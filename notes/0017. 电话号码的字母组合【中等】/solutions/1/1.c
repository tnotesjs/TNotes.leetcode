/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
const char* MAP[] = {"",    "",    "abc",  "def", "ghi",
                     "jkl", "mno", "pqrs", "tuv", "wxyz"};

void backtrack(char* digits, int index, char* path, int pathLen, char** ans,
               int* returnSize) {
    if (digits[index] == '\0') {
        ans[*returnSize] = (char*)malloc((pathLen + 1) * sizeof(char));
        strncpy(ans[*returnSize], path, pathLen);
        ans[*returnSize][pathLen] = '\0';
        (*returnSize)++;
        return;
    }
    const char* letters = MAP[digits[index] - '0'];
    for (int i = 0; letters[i] != '\0'; i++) {
        path[pathLen] = letters[i];
        backtrack(digits, index + 1, path, pathLen + 1, ans, returnSize);
    }
}

char** letterCombinations(char* digits, int* returnSize) {
    *returnSize = 0;
    int n = strlen(digits);
    if (n == 0)
        return NULL;

    // 最多 4 个数字，每个最多 4 个字母，最多 4^4 = 256 种组合
    char** ans = (char**)malloc(256 * sizeof(char*));
    char* path = (char*)malloc((n + 1) * sizeof(char));
    backtrack(digits, 0, path, 0, ans, returnSize);
    free(path);
    return ans;
}
