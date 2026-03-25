int* nextLargerNodes(struct ListNode* head, int* returnSize) {
    int n = 0;
    struct ListNode* cur = head;
    while (cur) { n++; cur = cur->next; }
    int* vals = malloc(n * sizeof(int));
    cur = head;
    for (int i = 0; i < n; i++) { vals[i] = cur->val; cur = cur->next; }
    int* res = calloc(n, sizeof(int));
    int* stack = malloc(n * sizeof(int));
    int top = 0;
    for (int i = 0; i < n; i++) {
        while (top > 0 && vals[stack[top - 1]] < vals[i]) {
            res[stack[--top]] = vals[i];
        }
        stack[top++] = i;
    }
    free(vals);
    free(stack);
    *returnSize = n;
    return res;
}
