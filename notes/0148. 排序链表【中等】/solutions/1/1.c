/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* merge(struct ListNode* l, struct ListNode* r) {
    struct ListNode dummy;
    struct ListNode* cur = &dummy;
    while (l && r) {
        if (l->val <= r->val) {
            cur->next = l;
            l = l->next;
        } else {
            cur->next = r;
            r = r->next;
        }
        cur = cur->next;
    }
    cur->next = l ? l : r;
    return dummy.next;
}

struct ListNode* sortList(struct ListNode* head) {
    if (!head || !head->next) return head;
    struct ListNode* slow = head;
    struct ListNode* fast = head->next;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    struct ListNode* mid = slow->next;
    slow->next = NULL;
    struct ListNode* left = sortList(head);
    struct ListNode* right = sortList(mid);
    return merge(left, right);
}
