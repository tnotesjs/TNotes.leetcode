/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** answers;
int answerSize;
int answerCap;

void ensureCapacity() {
    if (answerSize < answerCap)
        return;
    answerCap *= 2;
    answers = (char**)realloc(answers, answerCap * sizeof(char*));
}

void dfs(int n, int leftUsed, int rightUsed, char* path) {
    if (leftUsed == n && rightUsed == n) {
        ensureCapacity();
        char* str = (char*)malloc((2 * n + 1) * sizeof(char));
        memcpy(str, path, 2 * n * sizeof(char));
        str[2 * n] = '\0';
        answers[answerSize++] = str;
        return;
    }

    int idx = leftUsed + rightUsed;

    if (leftUsed < n) {
        path[idx] = '(';
        dfs(n, leftUsed + 1, rightUsed, path);
    }

    if (rightUsed < leftUsed) {
        path[idx] = ')';
        dfs(n, leftUsed, rightUsed + 1, path);
    }
}

char** generateParenthesis(int n, int* returnSize) {
    answerSize = 0;
    answerCap = 16;
    answers = (char**)malloc(answerCap * sizeof(char*));
    char* path = (char*)malloc((2 * n + 1) * sizeof(char));

    dfs(n, 0, 0, path);

    free(path);
    *returnSize = answerSize;
    return answers;
}
