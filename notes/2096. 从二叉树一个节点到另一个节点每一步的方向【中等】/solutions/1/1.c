/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
bool findPath2096(struct TreeNode* node, int target, char* path, int* len) {
    if (!node) return false;
    if (node->val == target) return true;
    path[(*len)++] = 'L';
    if (findPath2096(node->left, target, path, len)) return true;
    (*len)--;
    path[(*len)++] = 'R';
    if (findPath2096(node->right, target, path, len)) return true;
    (*len)--;
    return false;
}

char* getDirections(struct TreeNode* root, int startValue, int destValue) {
    char* pathS = (char*)malloc(200001);
    char* pathD = (char*)malloc(200001);
    int lenS = 0, lenD = 0;
    findPath2096(root, startValue, pathS, &lenS);
    findPath2096(root, destValue, pathD, &lenD);
    int i = 0;
    while (i < lenS && i < lenD && pathS[i] == pathD[i]) i++;
    int resLen = (lenS - i) + (lenD - i);
    char* res = (char*)malloc((resLen + 1) * sizeof(char));
    for (int j = 0; j < lenS - i; j++) res[j] = 'U';
    for (int j = 0; j < lenD - i; j++) res[lenS - i + j] = pathD[i + j];
    res[resLen] = '\0';
    free(pathS); free(pathD);
    return res;
}
