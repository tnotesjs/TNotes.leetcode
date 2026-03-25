#include <string.h>

#define HASH_SIZE 10007

typedef struct Node {
    char* key;
    int count;
    struct Node* next;
} Node;

int maxEqualRowsAfterFlips(int** matrix, int matrixSize, int* matrixColSize) {
    int n = matrixColSize[0];
    Node* table[HASH_SIZE];
    memset(table, 0, sizeof(table));
    int maxCount = 0;
    char* buf = malloc(n * 2 + 1);

    for (int i = 0; i < matrixSize; i++) {
        int flip = matrix[i][0];
        for (int j = 0; j < n; j++) {
            buf[j] = (matrix[i][j] ^ flip) + '0';
        }
        buf[n] = '\0';
        unsigned int h = 0;
        for (int j = 0; j < n; j++) h = h * 31 + buf[j];
        int idx = h % HASH_SIZE;
        Node* cur = table[idx];
        while (cur && strcmp(cur->key, buf) != 0) cur = cur->next;
        if (cur) {
            cur->count++;
            if (cur->count > maxCount) maxCount = cur->count;
        } else {
            Node* node = malloc(sizeof(Node));
            node->key = malloc(n + 1);
            strcpy(node->key, buf);
            node->count = 1;
            node->next = table[idx];
            table[idx] = node;
            if (1 > maxCount) maxCount = 1;
        }
    }
    free(buf);
    for (int i = 0; i < HASH_SIZE; i++) {
        Node* cur = table[i];
        while (cur) { Node* tmp = cur; cur = cur->next; free(tmp->key); free(tmp); }
    }
    return maxCount;
}
