/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     int numNeighbors;
 *     struct Node** neighbors;
 * };
 */
// 用数组模拟哈希表，最多 100 个节点，val 从 1 开始
struct Node* visited[101];

struct Node* dfs(struct Node* node) {
    if (!node) return NULL;
    if (visited[node->val]) return visited[node->val];
    struct Node* clone = (struct Node*)malloc(sizeof(struct Node));
    clone->val = node->val;
    clone->numNeighbors = node->numNeighbors;
    clone->neighbors = (struct Node**)malloc(sizeof(struct Node*) * node->numNeighbors);
    visited[node->val] = clone;
    for (int i = 0; i < node->numNeighbors; i++) {
        clone->neighbors[i] = dfs(node->neighbors[i]);
    }
    return clone;
}

struct Node* cloneGraph(struct Node* s) {
    memset(visited, 0, sizeof(visited));
    return dfs(s);
}
