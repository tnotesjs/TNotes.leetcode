/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* deleteDuplicates(struct ListNode* head) {
    struct ListNode dummy = {0, head};
    struct ListNode* prev = &dummy;

    while (prev->next) {
        struct ListNode* cur = prev->next;
        // 跳过所有重复节点
        while (cur->next && cur->val == cur->next->val) cur = cur->next;
        if (prev->next == cur) {
            prev = prev->next; // 无重复，前进
        } else {
            prev->next = cur->next; // 跳过所有重复节点
        }
    }
    return dummy.next;
}
