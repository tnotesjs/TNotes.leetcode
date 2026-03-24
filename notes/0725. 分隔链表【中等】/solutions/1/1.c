struct ListNode** splitListToParts(struct ListNode* head, int k, int* returnSize) {
    int len = 0;
    struct ListNode* cur = head;
    while (cur) { len++; cur = cur->next; }
    int size = len / k, extra = len % k;
    struct ListNode** res = (struct ListNode**)calloc(k, sizeof(struct ListNode*));
    *returnSize = k;
    cur = head;
    for (int i = 0; i < k && cur; i++) {
        res[i] = cur;
        int partSize = size + (i < extra ? 1 : 0);
        for (int j = 1; j < partSize; j++) cur = cur->next;
        struct ListNode* next = cur->next;
        cur->next = NULL;
        cur = next;
    }
    return res;
}
