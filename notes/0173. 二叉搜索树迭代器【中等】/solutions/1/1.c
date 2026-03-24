/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
typedef struct {
    struct TreeNode** stack;
    int top;
} BSTIterator;

void pushLeft(BSTIterator* obj, struct TreeNode* node) {
    while (node) {
        obj->stack[++obj->top] = node;
        node = node->left;
    }
}

BSTIterator* bSTIteratorCreate(struct TreeNode* root) {
    BSTIterator* obj = (BSTIterator*)malloc(sizeof(BSTIterator));
    obj->stack = (struct TreeNode**)malloc(sizeof(struct TreeNode*) * 100001);
    obj->top = -1;
    pushLeft(obj, root);
    return obj;
}

int bSTIteratorNext(BSTIterator* obj) {
    struct TreeNode* node = obj->stack[obj->top--];
    pushLeft(obj, node->right);
    return node->val;
}

bool bSTIteratorHasNext(BSTIterator* obj) {
    return obj->top >= 0;
}

void bSTIteratorFree(BSTIterator* obj) {
    free(obj->stack);
    free(obj);
}
