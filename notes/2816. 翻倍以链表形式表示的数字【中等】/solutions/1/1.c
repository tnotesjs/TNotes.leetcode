struct ListNode* doubleIt(struct ListNode* head) {
  if (head->val >= 5) {
    struct ListNode* newHead = (struct ListNode*)malloc(sizeof(struct ListNode));
    newHead->val = 0;
    newHead->next = head;
    head = newHead;
  }
  struct ListNode* cur = head;
  while (cur) {
    cur->val = (cur->val * 2 + (cur->next && cur->next->val >= 5 ? 1 : 0)) % 10;
    cur = cur->next;
  }
  return head;
}
