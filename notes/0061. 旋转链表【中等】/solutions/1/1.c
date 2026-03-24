/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* rotateRight(struct ListNode* head, int k) {
    if (!head || !head->next || k == 0) return head;

    // 计算链表长度，并找到尾节点
    int len = 1;
    struct ListNode* tail = head;
    while (tail->next) { tail = tail->next; len++; }

    k %= len;
    if (k == 0) return head;

    tail->next = head; // 尾节点接头，形成环

    // 找到新的尾节点（从 head 走 len - k - 1 步）
    struct ListNode* newTail = head;
    for (int i = 0; i < len - k - 1; i++) newTail = newTail->next;

    struct ListNode* newHead = newTail->next;
    newTail->next = NULL; // 断开环
    return newHead;
}
