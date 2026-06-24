/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
void inorder(struct TreeNode* node, int** values, int* returnSize) {
    if (!node)
        return;
    inorder(node->left, values, returnSize);
    values[0][(*returnSize)++] = node->val;
    inorder(node->right, values, returnSize);
}

void recover(struct TreeNode* node, int* values, int* index, int firstVal,
             int secondVal) {
    if (!node)
        return;
    recover(node->left, values, index, firstVal, secondVal);
    if (values[*index] == firstVal)
        node->val = secondVal;
    else if (values[*index] == secondVal)
        node->val = firstVal;
    (*index)++;
    recover(node->right, values, index, firstVal, secondVal);
}

void recoverTree(struct TreeNode* root) {
    int* values = (int*)malloc(sizeof(int) * 1000);
    int size = 0;
    inorder(root, &values, &size);

    // 找到两个被交换的节点值
    int first = -1, second = -1;
    int found = 0;
    for (int i = 0; i < size - 1; i++) {
        if (values[i] > values[i + 1]) {
            if (!found) {
                first = values[i];
                second = values[i + 1];
                found = 1;
            } else {
                second = values[i + 1];
                break;
            }
        }
    }

    // 中序遍历并交换
    int index = 0;
    recover(root, values, &index, first, second);
    free(values);
}
