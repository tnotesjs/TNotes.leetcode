#define MAX_VAL2196 100001

struct TreeNode* createBinaryTree(int** descriptions, int descriptionsSize, int* descriptionsColSize) {
    struct TreeNode **nodes = (struct TreeNode **)calloc(MAX_VAL2196, sizeof(struct TreeNode *));
    int *isChild = (int *)calloc(MAX_VAL2196, sizeof(int));
    for (int i = 0; i < descriptionsSize; i++) {
        int p = descriptions[i][0], c = descriptions[i][1], left = descriptions[i][2];
        if (!nodes[p]) {
            nodes[p] = (struct TreeNode *)malloc(sizeof(struct TreeNode));
            nodes[p]->val = p; nodes[p]->left = NULL; nodes[p]->right = NULL;
        }
        if (!nodes[c]) {
            nodes[c] = (struct TreeNode *)malloc(sizeof(struct TreeNode));
            nodes[c]->val = c; nodes[c]->left = NULL; nodes[c]->right = NULL;
        }
        if (left) nodes[p]->left = nodes[c];
        else nodes[p]->right = nodes[c];
        isChild[c] = 1;
    }
    struct TreeNode *root = NULL;
    for (int i = 0; i < descriptionsSize; i++) {
        if (!isChild[descriptions[i][0]]) { root = nodes[descriptions[i][0]]; break; }
    }
    free(nodes); free(isChild);
    return root;
}
