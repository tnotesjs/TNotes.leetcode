typedef struct TrieNode {
    struct TrieNode* children[26];
    char* word;
} TrieNode;

TrieNode* createNode() {
    return (TrieNode*)calloc(1, sizeof(TrieNode));
}

void insertWord(TrieNode* root, char* word) {
    TrieNode* node = root;
    for (int i = 0; word[i]; i++) {
        int idx = word[i] - 'a';
        if (!node->children[idx]) node->children[idx] = createNode();
        node = node->children[idx];
    }
    node->word = word;
}

void dfs(char** board, int m, int n, int i, int j, TrieNode* node, char** res, int* resSize) {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] == '#') return;
    int idx = board[i][j] - 'a';
    if (!node->children[idx]) return;
    node = node->children[idx];
    if (node->word) {
        res[(*resSize)++] = node->word;
        node->word = NULL;
    }
    char tmp = board[i][j];
    board[i][j] = '#';
    dfs(board, m, n, i + 1, j, node, res, resSize);
    dfs(board, m, n, i - 1, j, node, res, resSize);
    dfs(board, m, n, i, j + 1, node, res, resSize);
    dfs(board, m, n, i, j - 1, node, res, resSize);
    board[i][j] = tmp;
}

char** findWords(char** board, int boardSize, int* boardColSize, char** words, int wordsSize, int* returnSize) {
    TrieNode* root = createNode();
    for (int i = 0; i < wordsSize; i++) insertWord(root, words[i]);
    char** res = (char**)malloc(sizeof(char*) * wordsSize);
    *returnSize = 0;
    int m = boardSize, n = boardColSize[0];
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            dfs(board, m, n, i, j, root, res, returnSize);
    return res;
}
