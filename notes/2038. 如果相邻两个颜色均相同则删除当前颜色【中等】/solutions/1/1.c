bool winnerOfGame(char* colors) {
    int a = 0, b = 0, n = strlen(colors);
    for (int i = 1; i < n - 1; i++) {
        if (colors[i] == 'A' && colors[i - 1] == 'A' && colors[i + 1] == 'A') a++;
        else if (colors[i] == 'B' && colors[i - 1] == 'B' && colors[i + 1] == 'B') b++;
    }
    return a > b;
}
