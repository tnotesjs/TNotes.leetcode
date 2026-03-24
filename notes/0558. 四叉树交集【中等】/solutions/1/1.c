struct Node* intersect(struct Node* quadTree1, struct Node* quadTree2) {
    if (quadTree1->isLeaf) return quadTree1->val ? quadTree1 : quadTree2;
    if (quadTree2->isLeaf) return quadTree2->val ? quadTree2 : quadTree1;
    struct Node* tl = intersect(quadTree1->topLeft, quadTree2->topLeft);
    struct Node* tr = intersect(quadTree1->topRight, quadTree2->topRight);
    struct Node* bl = intersect(quadTree1->bottomLeft, quadTree2->bottomLeft);
    struct Node* br = intersect(quadTree1->bottomRight, quadTree2->bottomRight);
    if (tl->isLeaf && tr->isLeaf && bl->isLeaf && br->isLeaf &&
        tl->val == tr->val && tr->val == bl->val && bl->val == br->val) {
        struct Node* node = (struct Node*)malloc(sizeof(struct Node));
        node->val = tl->val;
        node->isLeaf = 1;
        node->topLeft = node->topRight = node->bottomLeft = node->bottomRight = NULL;
        return node;
    }
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->val = 0;
    node->isLeaf = 0;
    node->topLeft = tl;
    node->topRight = tr;
    node->bottomLeft = bl;
    node->bottomRight = br;
    return node;
}
