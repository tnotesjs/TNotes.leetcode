/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* reverseBetween(struct ListNode* head, int left, int right) {
    struct ListNode dummy = {0, head};
    struct ListNode* prev = &dummy;
    for (int i = 1; i < left; i++) prev = prev->next; // 定位到 left 前一个节点

    struct ListNode* cur = prev->next;
    for (int i = 0; i < right - left; i++) { // 头插法逐个反转
        struct ListNode* next = cur->next;
        cur->next = next->next;
        next->next = prev->next;
        prev->next = next;
    }
    return dummy.next;
}
