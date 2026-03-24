struct ListNode* oddEvenList(struct ListNode* head) {
    if (!head) return head;
    struct ListNode* odd = head;
    struct ListNode* even = head->next;
    struct ListNode* evenHead = even;
    while (even && even->next) {
        odd->next = even->next;
        odd = odd->next;
        even->next = odd->next;
        even = even->next;
    }
    odd->next = evenHead;
    return head;
}
