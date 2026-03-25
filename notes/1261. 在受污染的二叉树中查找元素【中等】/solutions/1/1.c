#define MAX_SIZE 1000001

typedef struct {
    bool* vals;
} FindElements;

void dfs(FindElements* obj, struct TreeNode* node, int val) {
    if (!node || val >= MAX_SIZE) return;
    obj->vals[val] = true;
    dfs(obj, node->left, 2 * val + 1);
    dfs(obj, node->right, 2 * val + 2);
}

FindElements* findElementsCreate(struct TreeNode* root) {
    FindElements* obj = malloc(sizeof(FindElements));
    obj->vals = calloc(MAX_SIZE, sizeof(bool));
    dfs(obj, root, 0);
    return obj;
}

bool findElementsFind(FindElements* obj, int target) {
    return target < MAX_SIZE && obj->vals[target];
}

void findElementsFree(FindElements* obj) {
    free(obj->vals);
    free(obj);
}
