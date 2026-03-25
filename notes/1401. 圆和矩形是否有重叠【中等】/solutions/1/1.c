bool checkOverlap(int radius, int xCenter, int yCenter, int x1, int y1, int x2, int y2) {
    int cx = xCenter < x1 ? x1 : (xCenter > x2 ? x2 : xCenter);
    int cy = yCenter < y1 ? y1 : (yCenter > y2 ? y2 : yCenter);
    int dx = xCenter - cx, dy = yCenter - cy;
    return dx * dx + dy * dy <= radius * radius;
}
