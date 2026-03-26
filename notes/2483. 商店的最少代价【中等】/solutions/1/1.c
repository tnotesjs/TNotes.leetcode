int bestClosingTime(char* customers) {
    int n = strlen(customers);
    int totalY = 0;
    for (int i = 0; i < n; i++) if (customers[i] == 'Y') totalY++;
    int penalty = totalY, minPenalty = totalY, bestTime = 0;
    for (int i = 0; i < n; i++) {
        if (customers[i] == 'Y') penalty--;
        else penalty++;
        if (penalty < minPenalty) {
            minPenalty = penalty;
            bestTime = i + 1;
        }
    }
    return bestTime;
}
