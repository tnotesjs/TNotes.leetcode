bool match(struct ListNode* list, struct TreeNode* tree) {
    if (!list) return true;
    if (!tree) return false;
    if (list->val != tree->val) return false;
    return match(list->next, tree->left) || match(list->next, tree->right);
}

bool isSubPath(struct ListNode* head, struct TreeNode* root) {
    if (!root) return false;
    return match(head, root) || isSubPath(head, root->left) || isSubPath(head, root->right);
}
