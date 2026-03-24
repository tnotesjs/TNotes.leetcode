#define MAX_SIZE 20001
typedef struct { int key; int val; } Entry;
Entry hashMap[MAX_SIZE];
int used[MAX_SIZE];

int hash(int key) {
    int h = key % MAX_SIZE;
    return h < 0 ? h + MAX_SIZE : h;
}

void put(int key) {
    int h = hash(key);
    while (used[h]) {
        if (hashMap[h].key == key) { hashMap[h].val++; return; }
        h = (h + 1) % MAX_SIZE;
    }
    used[h] = 1;
    hashMap[h].key = key;
    hashMap[h].val = 1;
}

int leastBricks(int** wall, int wallSize, int* wallColSize) {
    memset(used, 0, sizeof(used));
    int maxGap = 0;
    for (int i = 0; i < wallSize; i++) {
        int sum = 0;
        for (int j = 0; j < wallColSize[i] - 1; j++) {
            sum += wall[i][j];
            put(sum);
        }
    }
    for (int i = 0; i < MAX_SIZE; i++) {
        if (used[i] && hashMap[i].val > maxGap) maxGap = hashMap[i].val;
    }
    return wallSize - maxGap;
}
