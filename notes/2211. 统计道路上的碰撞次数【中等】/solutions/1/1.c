int countCollisions(char* directions) {
    int n = strlen(directions);
    int left = 0, right = n - 1;
    while (left <= right && directions[left] == 'L') left++;
    while (right >= left && directions[right] == 'R') right--;
    int count = 0;
    for (int i = left; i <= right; i++) {
        if (directions[i] != 'S') count++;
    }
    return count;
}
