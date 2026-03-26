/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
int pairSum(struct ListNode* head) {
    // 找中点
    struct ListNode* slow = head;
    struct ListNode* fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    // 反转后半部分
    struct ListNode* prev = NULL;
    while (slow) {
        struct ListNode* next = slow->next;
        slow->next = prev;
        prev = slow;
        slow = next;
    }
    // 比较孪生和
    int res = 0;
    struct ListNode* left = head;
    struct ListNode* right = prev;
    while (right) {
        int sum = left->val + right->val;
        if (sum > res) res = sum;
        left = left->next;
        right = right->next;
    }
    return res;
}
