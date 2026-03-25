int sumSubarrayMins(int* arr, int arrSize) {
    long long MOD = 1000000007;
    int n = arrSize;
    int* left = (int*)malloc(sizeof(int) * n);
    int* right = (int*)malloc(sizeof(int) * n);
    int* stack = (int*)malloc(sizeof(int) * n);
    int top = -1;
    for (int i = 0; i < n; i++) {
        while (top >= 0 && arr[stack[top]] >= arr[i]) top--;
        left[i] = top >= 0 ? i - stack[top] : i + 1;
        stack[++top] = i;
    }
    top = -1;
    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && arr[stack[top]] > arr[i]) top--;
        right[i] = top >= 0 ? stack[top] - i : n - i;
        stack[++top] = i;
    }
    long long res = 0;
    for (int i = 0; i < n; i++) res = (res + (long long)arr[i] * left[i] % MOD * right[i]) % MOD;
    free(left); free(right); free(stack);
    return (int)res;
}
