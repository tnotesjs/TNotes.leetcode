struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    int s1[100], s2[100], t1 = 0, t2 = 0;
    while (l1) { s1[t1++] = l1->val; l1 = l1->next; }
    while (l2) { s2[t2++] = l2->val; l2 = l2->next; }
    int carry = 0;
    struct ListNode* head = NULL;
    while (t1 > 0 || t2 > 0 || carry) {
        int sum = carry;
        if (t1 > 0) sum += s1[--t1];
        if (t2 > 0) sum += s2[--t2];
        carry = sum / 10;
        struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
        node->val = sum % 10;
        node->next = head;
        head = node;
    }
    return head;
}
