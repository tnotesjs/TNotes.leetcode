char* largestTimeFromDigits(int* arr, int arrSize) {
    int maxMinutes = -1;

    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            if (j == i) continue;
            for (int k = 0; k < 4; k++) {
                if (k == i || k == j) continue;
                int l = 6 - i - j - k;
                int hours = arr[i] * 10 + arr[j];
                int minutes = arr[k] * 10 + arr[l];
                if (hours < 24 && minutes < 60) {
                    int total = hours * 60 + minutes;
                    if (total > maxMinutes) maxMinutes = total;
                }
            }
        }
    }

    char* result = malloc(6 * sizeof(char));
    if (maxMinutes == -1) {
        result[0] = '\0';
    } else {
        int h = maxMinutes / 60, m = maxMinutes % 60;
        result[0] = '0' + h / 10;
        result[1] = '0' + h % 10;
        result[2] = ':';
        result[3] = '0' + m / 10;
        result[4] = '0' + m % 10;
        result[5] = '\0';
    }
    return result;
}
