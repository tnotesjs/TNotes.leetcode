#include <math.h>

bool escapeGhosts(int** ghosts, int ghostsSize, int* ghostsColSize, int* target, int targetSize) {
    int dist = abs(target[0]) + abs(target[1]);
    for (int i = 0; i < ghostsSize; i++) {
        if (abs(ghosts[i][0] - target[0]) + abs(ghosts[i][1] - target[1]) <= dist) return false;
    }
    return true;
}
