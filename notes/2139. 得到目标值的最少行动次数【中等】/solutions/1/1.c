int minMoves(int target, int maxDoubles) {
    int moves = 0;
    while (target > 1 && maxDoubles > 0) {
        if (target % 2 == 1) {
            target--;
            moves++;
        }
        target /= 2;
        maxDoubles--;
        moves++;
    }
    moves += target - 1;
    return moves;
}
