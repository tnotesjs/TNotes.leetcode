int minCost(char* colors, int* neededTime, int neededTimeSize) {
    int res = 0;
    for (int i = 1; i < neededTimeSize; i++) {
        if (colors[i] == colors[i - 1]) {
            res += neededTime[i] < neededTime[i-1] ? neededTime[i] : neededTime[i-1];
            if (neededTime[i] < neededTime[i-1]) neededTime[i] = neededTime[i-1];
        }
    }
    return res;
}
