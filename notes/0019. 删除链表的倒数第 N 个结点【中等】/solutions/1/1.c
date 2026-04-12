/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {
    struct ListNode dummy;
    dummy.next = head;
    struct ListNode* fast = &dummy;
    struct ListNode* slow = &dummy;

    // fast 先走 n + 1 步
    for (int i = 0; i <= n; i++) fast = fast->next;

    // fast 和 slow 同步前进，直到 fast 到达末尾
    while (fast) {
        fast = fast->next;
        slow = slow->next;
    }

    // slow->next 即为待删除节点
    struct ListNode* del = slow->next;
    slow->next = del->next;
    free(del);
    return dummy.next;
}
