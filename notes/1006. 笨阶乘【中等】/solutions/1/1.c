int clumsy(int n) {
    int stack[n > 0 ? n : 1];
    int top = 0;
    stack[top++] = n;
    int idx = 0;
    for (int i = n - 1; i >= 1; i--) {
        int op = idx % 4;
        if (op == 0) {
            stack[top - 1] *= i;
        } else if (op == 1) {
            stack[top - 1] /= i;
        } else if (op == 2) {
            stack[top++] = i;
        } else {
            stack[top++] = -i;
        }
        idx++;
    }
    int res = 0;
    for (int i = 0; i < top; i++) res += stack[i];
    return res;
}
