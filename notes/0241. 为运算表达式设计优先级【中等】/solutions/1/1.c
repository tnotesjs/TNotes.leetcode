int* diffWaysToCompute(char* expression, int* returnSize) {
    int* res = (int*)malloc(sizeof(int) * 1000);
    *returnSize = 0;
    int len = strlen(expression);
    for (int i = 0; i < len; i++) {
        if (expression[i] == '+' || expression[i] == '-' || expression[i] == '*') {
            char leftStr[len + 1], rightStr[len + 1];
            strncpy(leftStr, expression, i);
            leftStr[i] = '\0';
            strcpy(rightStr, expression + i + 1);
            int leftSize, rightSize;
            int* left = diffWaysToCompute(leftStr, &leftSize);
            int* right = diffWaysToCompute(rightStr, &rightSize);
            for (int l = 0; l < leftSize; l++) {
                for (int r = 0; r < rightSize; r++) {
                    if (expression[i] == '+') res[(*returnSize)++] = left[l] + right[r];
                    else if (expression[i] == '-') res[(*returnSize)++] = left[l] - right[r];
                    else res[(*returnSize)++] = left[l] * right[r];
                }
            }
            free(left);
            free(right);
        }
    }
    if (*returnSize == 0) res[(*returnSize)++] = atoi(expression);
    return res;
}
