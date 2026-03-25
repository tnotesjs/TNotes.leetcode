struct ListNode* removeZeroSumSublists(struct ListNode* head) {
    struct ListNode dummy = {0, head};
    // prefix sum range: [-1000000, 1000000]
    static struct ListNode* last[2000001];
    memset(last, 0, sizeof(last));
    int offset = 1000000;
    int sum = 0;
    for (struct ListNode* node = &dummy; node; node = node->next) {
        sum += node->val;
        last[sum + offset] = node;
    }
    sum = 0;
    for (struct ListNode* node = &dummy; node; node = node->next) {
        sum += node->val;
        node->next = last[sum + offset]->next;
    }
    return dummy.next;
}
