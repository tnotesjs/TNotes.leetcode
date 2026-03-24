/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
void reorderList(struct ListNode* head) {
    if (!head || !head->next) return;
    // 找中点
    struct ListNode* slow = head;
    struct ListNode* fast = head;
    while (fast->next && fast->next->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    // 反转后半部分
    struct ListNode* prev = NULL;
    struct ListNode* cur = slow->next;
    slow->next = NULL;
    while (cur) {
        struct ListNode* next = cur->next;
        cur->next = prev;
        prev = cur;
        cur = next;
    }
    // 合并两个链表
    struct ListNode* l1 = head;
    struct ListNode* l2 = prev;
    while (l2) {
        struct ListNode* next1 = l1->next;
        struct ListNode* next2 = l2->next;
        l1->next = l2;
        l2->next = next1;
        l1 = next1;
        l2 = next2;
    }
}
