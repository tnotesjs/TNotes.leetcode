/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     struct Node *left;
 *     struct Node *right;
 *     struct Node *next;
 * };
 */
struct Node* connect(struct Node* root) {
    struct Node* cur = root;

    while (cur) {
        struct Node dummy;
        dummy.next = NULL;
        struct Node* tail = &dummy;

        while (cur) {
            if (cur->left) { tail->next = cur->left; tail = tail->next; }
            if (cur->right) { tail->next = cur->right; tail = tail->next; }
            cur = cur->next;
        }

        cur = dummy.next;  // 进入下一层
    }

    return root;
}
