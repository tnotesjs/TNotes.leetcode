/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* getIntersectionNode(struct ListNode* headA, struct ListNode* headB) {
    if (!headA || !headB) return NULL;

    struct ListNode* pA = headA;
    struct ListNode* pB = headB;

    while (pA != pB) {
        pA = pA ? pA->next : headB;
        pB = pB ? pB->next : headA;
    }

    return pA;
}
