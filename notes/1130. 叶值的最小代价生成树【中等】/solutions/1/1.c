int mctFromLeafValues(int* arr, int arrSize) {
    int res = 0;
    int stack[arrSize + 1], top = 0;
    stack[top++] = INT_MAX;
    for (int i = 0; i < arrSize; i++) {
        while (stack[top - 1] <= arr[i]) {
            int mid = stack[--top];
            int minVal = stack[top - 1] < arr[i] ? stack[top - 1] : arr[i];
            res += mid * minVal;
        }
        stack[top++] = arr[i];
    }
    while (top > 2) {
        res += stack[--top] * stack[top - 1];
    }
    return res;
}
