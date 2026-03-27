long long largestSquareArea(int** bottomLeft, int bottomLeftSize, int* bottomLeftColSize, int** topRight, int topRightSize, int* topRightColSize) {
    long long ans = 0;
    for (int i = 0; i < bottomLeftSize; i++) {
        for (int j = i + 1; j < bottomLeftSize; j++) {
            int x1 = bottomLeft[i][0] > bottomLeft[j][0] ? bottomLeft[i][0] : bottomLeft[j][0];
            int y1 = bottomLeft[i][1] > bottomLeft[j][1] ? bottomLeft[i][1] : bottomLeft[j][1];
            int x2 = topRight[i][0] < topRight[j][0] ? topRight[i][0] : topRight[j][0];
            int y2 = topRight[i][1] < topRight[j][1] ? topRight[i][1] : topRight[j][1];
            if (x1 < x2 && y1 < y2) {
                long long side = (x2 - x1) < (y2 - y1) ? (x2 - x1) : (y2 - y1);
                if (side * side > ans) ans = side * side;
            }
        }
    }
    return ans;
}
