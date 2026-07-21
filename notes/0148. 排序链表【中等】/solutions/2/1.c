/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
// 切断链表前 size 个节点，返回剩余部分的头
struct ListNode* split(struct ListNode* head, int size) {
    if (!head)
        return NULL;
    for (int i = 1; head->next && i < size; i++)
        head = head->next;
    struct ListNode* rest = head->next;
    head->next = NULL;
    return rest;
}

// 合并两个有序链表，接到 prev 后面，返回合并后的尾节点
struct ListNode* merge(struct ListNode* l1, struct ListNode* l2,
                       struct ListNode* prev) {
    while (l1 && l2) {
        if (l1->val <= l2->val) {
            prev->next = l1;
            l1 = l1->next;
        } else {
            prev->next = l2;
            l2 = l2->next;
        }
        prev = prev->next;
    }
    prev->next = l1 ? l1 : l2;
    while (prev->next)
        prev = prev->next;
    return prev;
}

struct ListNode* sortList(struct ListNode* head) {
    if (!head || !head->next)
        return head;

    int len = 0;
    for (struct ListNode* p = head; p; p = p->next)
        len++;

    struct ListNode dummy;
    dummy.next = head;

    for (int size = 1; size < len; size *= 2) {
        struct ListNode* prev = &dummy;
        struct ListNode* cur = dummy.next;

        while (cur) {
            struct ListNode* l1 = cur;
            struct ListNode* l2 = split(l1, size);
            cur = split(l2, size);

            prev = merge(l1, l2, prev);
        }
    }

    return dummy.next;
}
