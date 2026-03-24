struct Node* build(int** grid, int r, int c, int size) {
    if (size == 1) {
        struct Node* node = (struct Node*)malloc(sizeof(struct Node));
        node->val = grid[r][c]; node->isLeaf = 1;
        node->topLeft = node->topRight = node->bottomLeft = node->bottomRight = NULL;
        return node;
    }
    int half = size / 2;
    struct Node* tl = build(grid, r, c, half);
    struct Node* tr = build(grid, r, c + half, half);
    struct Node* bl = build(grid, r + half, c, half);
    struct Node* br = build(grid, r + half, c + half, half);
    if (tl->isLeaf && tr->isLeaf && bl->isLeaf && br->isLeaf &&
        tl->val == tr->val && tr->val == bl->val && bl->val == br->val) {
        struct Node* node = (struct Node*)malloc(sizeof(struct Node));
        node->val = tl->val; node->isLeaf = 1;
        node->topLeft = node->topRight = node->bottomLeft = node->bottomRight = NULL;
        free(tl); free(tr); free(bl); free(br);
        return node;
    }
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->val = 1; node->isLeaf = 0;
    node->topLeft = tl; node->topRight = tr; node->bottomLeft = bl; node->bottomRight = br;
    return node;
}

struct Node* construct(int** grid, int gridSize, int* gridColSize) {
    return build(grid, 0, 0, gridSize);
}
