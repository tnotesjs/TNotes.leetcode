#define HASH_SIZE 100003
typedef struct Node { int x, y; struct Node* next; } Node;

unsigned hashFunc(int x, int y) { return ((unsigned)(x * 1000003 + y)) % HASH_SIZE; }

bool contains(Node** table, int x, int y) {
    for (Node* n = table[hashFunc(x, y)]; n; n = n->next)
        if (n->x == x && n->y == y) return true;
    return false;
}

void insert(Node** table, int x, int y) {
    unsigned h = hashFunc(x, y);
    Node* n = (Node*)malloc(sizeof(Node));
    n->x = x; n->y = y; n->next = table[h]; table[h] = n;
}

int robotSim(int* commands, int commandsSize, int** obstacles, int obstaclesSize, int* obstaclesColSize) {
    Node* table[HASH_SIZE];
    memset(table, 0, sizeof(table));
    for (int i = 0; i < obstaclesSize; i++) insert(table, obstacles[i][0], obstacles[i][1]);
    int dx[] = {0, 1, 0, -1}, dy[] = {1, 0, -1, 0};
    int x = 0, y = 0, d = 0, res = 0;
    for (int i = 0; i < commandsSize; i++) {
        if (commands[i] == -2) d = (d + 3) % 4;
        else if (commands[i] == -1) d = (d + 1) % 4;
        else {
            for (int j = 0; j < commands[i]; j++) {
                int nx = x + dx[d], ny = y + dy[d];
                if (contains(table, nx, ny)) break;
                x = nx; y = ny;
                int dist = x * x + y * y;
                if (dist > res) res = dist;
            }
        }
    }
    for (int i = 0; i < HASH_SIZE; i++) {
        Node* n = table[i];
        while (n) { Node* t = n->next; free(n); n = t; }
    }
    return res;
}
