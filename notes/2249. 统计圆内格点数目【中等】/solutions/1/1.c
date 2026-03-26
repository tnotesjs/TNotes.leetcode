int countLatticePoints(int** circles, int circlesSize, int* circlesColSize) {
    // 坐标范围 [0, 200]
    bool seen[201][201];
    memset(seen, false, sizeof(seen));
    int count = 0;
    for (int k = 0; k < circlesSize; k++) {
        int cx = circles[k][0], cy = circles[k][1], r = circles[k][2];
        for (int x = cx - r; x <= cx + r; x++) {
            for (int y = cy - r; y <= cy + r; y++) {
                if (x >= 0 && y >= 0 && x <= 200 && y <= 200) {
                    if ((x - cx) * (x - cx) + (y - cy) * (y - cy) <= r * r && !seen[x][y]) {
                        seen[x][y] = true;
                        count++;
                    }
                }
            }
        }
    }
    return count;
}
