struct ListNode* swapNodes(struct ListNode* head, int k) {
    struct ListNode* first = head;
    for (int i = 1; i < k; i++) first = first->next;
    struct ListNode* slow = head;
    struct ListNode* fast = first;
    while (fast->next) {
        slow = slow->next;
        fast = fast->next;
    }
    int tmp = first->val;
    first->val = slow->val;
    slow->val = tmp;
    return head;
}
