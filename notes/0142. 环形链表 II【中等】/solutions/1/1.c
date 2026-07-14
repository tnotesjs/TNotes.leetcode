/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* detectCycle(struct ListNode* head) {
    if (!head || !head->next)
        return NULL;

    struct ListNode* slow = head;
    struct ListNode* fast = head;

    // 第一步：检测是否有环
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast)
            break;
    }

    // 无环
    if (!fast || !fast->next)
        return NULL;

    // 第二步：找环的入口
    fast = head;
    while (slow != fast) {
        slow = slow->next;
        fast = fast->next;
    }

    return slow;
}
