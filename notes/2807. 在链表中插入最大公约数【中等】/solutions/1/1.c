int gcd(int a, int b) {
  return b == 0 ? a : gcd(b, a % b);
}

struct ListNode* insertGreatestCommonDivisors(struct ListNode* head) {
  struct ListNode* cur = head;
  while (cur && cur->next) {
    int g = gcd(cur->val, cur->next->val);
    struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
    node->val = g;
    node->next = cur->next;
    cur->next = node;
    cur = node->next;
  }
  return head;
}
