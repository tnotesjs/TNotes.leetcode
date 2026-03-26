/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* reverseList2487(struct ListNode* head) {
    struct ListNode *prev = NULL;
    while (head) {
        struct ListNode *next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

struct ListNode* removeNodes(struct ListNode* head) {
    head = reverseList2487(head);
    struct ListNode *cur = head;
    int maxVal = cur->val;
    while (cur->next) {
        if (cur->next->val < maxVal) {
            cur->next = cur->next->next;
        } else {
            maxVal = cur->next->val;
            cur = cur->next;
        }
    }
    return reverseList2487(head);
}
