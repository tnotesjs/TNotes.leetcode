/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* swapPairs(struct ListNode* head) {
    struct ListNode dummy;
    dummy.next = head;
    struct ListNode* cur = &dummy;

    while (cur->next && cur->next->next) {
        struct ListNode* first = cur->next;        // 第一个节点
        struct ListNode* second = cur->next->next; // 第二个节点
        first->next = second->next;                // first 指向第二个节点后续
        second->next = first;                      // second 指向 first
        cur->next = second;                        // 前驱节点指向 second
        cur = first;                               // 移动到下一对的前驱
    }

    return dummy.next;
}
