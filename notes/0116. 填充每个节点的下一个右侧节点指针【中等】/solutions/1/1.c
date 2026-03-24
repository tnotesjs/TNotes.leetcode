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
    if (!root) return NULL;
    struct Node* leftmost = root;

    while (leftmost->left) {
        struct Node* cur = leftmost;
        while (cur) {
            cur->left->next = cur->right;
            if (cur->next) cur->right->next = cur->next->left;
            cur = cur->next;
        }
        leftmost = leftmost->left;
    }

    return root;
}
