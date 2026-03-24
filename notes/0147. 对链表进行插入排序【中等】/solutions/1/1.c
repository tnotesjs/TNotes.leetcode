/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* insertionSortList(struct ListNode* head) {
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* cur = head;
    while (cur) {
        struct ListNode* next = cur->next;
        struct ListNode* prev = &dummy;
        while (prev->next && prev->next->val < cur->val) {
            prev = prev->next;
        }
        cur->next = prev->next;
        prev->next = cur;
        cur = next;
    }
    return dummy.next;
}
