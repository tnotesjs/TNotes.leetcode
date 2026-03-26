bool isReachableAtTime(int sx, int sy, int fx, int fy, int t) {
    int dx = abs(sx - fx), dy = abs(sy - fy);
    if (dx == 0 && dy == 0) return t != 1;
    return t >= (dx > dy ? dx : dy);
}
