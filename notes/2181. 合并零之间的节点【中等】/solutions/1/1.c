/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* mergeNodes(struct ListNode* head) {
    struct ListNode dummy = {0, NULL};
    struct ListNode* tail = &dummy;
    struct ListNode* cur = head->next;
    int sum = 0;
    while (cur) {
        if (cur->val == 0) {
            struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
            node->val = sum;
            node->next = NULL;
            tail->next = node;
            tail = node;
            sum = 0;
        } else {
            sum += cur->val;
        }
        cur = cur->next;
    }
    return dummy.next;
}
