int countGoodRectangles(int** rectangles, int rectanglesSize, int* rectanglesColSize) {
    int best = 0, cnt = 0;
    for (int i = 0; i < rectanglesSize; i++) {
        int side = rectangles[i][0] < rectangles[i][1] ? rectangles[i][0] : rectangles[i][1];
        if (side > best) {
            best = side;
            cnt = 1;
        } else if (side == best) {
            cnt++;
        }
    }
    return cnt;
}
