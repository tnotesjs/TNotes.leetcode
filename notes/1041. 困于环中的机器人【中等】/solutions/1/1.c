bool isRobotBounded(char* instructions) {
    int dirs[4][2] = {{0,1},{1,0},{0,-1},{-1,0}};
    int x = 0, y = 0, d = 0;
    for (int i = 0; instructions[i]; i++) {
        if (instructions[i] == 'G') {
            x += dirs[d][0];
            y += dirs[d][1];
        } else if (instructions[i] == 'L') {
            d = (d + 3) % 4;
        } else {
            d = (d + 1) % 4;
        }
    }
    return (x == 0 && y == 0) || d != 0;
}
