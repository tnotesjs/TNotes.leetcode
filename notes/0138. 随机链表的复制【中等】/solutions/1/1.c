/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     struct Node *next;
 *     struct Node *random;
 * };
 */
struct Node* copyRandomList(struct Node* head) {
    if (!head) return NULL;
    // 第一步：在每个节点后插入克隆节点
    struct Node* cur = head;
    while (cur) {
        struct Node* clone = (struct Node*)malloc(sizeof(struct Node));
        clone->val = cur->val;
        clone->next = cur->next;
        clone->random = NULL;
        cur->next = clone;
        cur = clone->next;
    }
    // 第二步：设置克隆节点的 random
    cur = head;
    while (cur) {
        if (cur->random) {
            cur->next->random = cur->random->next;
        }
        cur = cur->next->next;
    }
    // 第三步：拆分链表
    cur = head;
    struct Node* newHead = head->next;
    while (cur) {
        struct Node* clone = cur->next;
        cur->next = clone->next;
        clone->next = clone->next ? clone->next->next : NULL;
        cur = cur->next;
    }
    return newHead;
}
