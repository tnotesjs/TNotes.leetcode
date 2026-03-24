/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* partition(struct ListNode* head, int x) {
    struct ListNode smallDummy = {0, NULL}, largeDummy = {0, NULL};
    struct ListNode* small = &smallDummy;
    struct ListNode* large = &largeDummy;

    while (head) {
        if (head->val < x) { small->next = head; small = small->next; }
        else { large->next = head; large = large->next; }
        head = head->next;
    }
    large->next = NULL;           // 断开大链表尾部
    small->next = largeDummy.next; // 拼接两段
    return smallDummy.next;
}
