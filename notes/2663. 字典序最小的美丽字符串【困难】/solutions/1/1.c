char* smallestBeautifulString(char* s, int k) {
    int n = strlen(s);
    char* arr = (char*)malloc((n + 1) * sizeof(char));
    strcpy(arr, s);
    int i = n - 1;
    arr[i]++;

    while (i >= 0 && i < n) {
        if (arr[i] - 'a' >= k) {
            i--;
            if (i >= 0) arr[i]++;
        } else if ((i >= 1 && arr[i] == arr[i - 1]) ||
                   (i >= 2 && arr[i] == arr[i - 2])) {
            arr[i]++;
        } else {
            i++;
            if (i < n) arr[i] = 'a';
        }
    }

    if (i < 0) {
        arr[0] = '\0';
        return arr;
    }
    arr[n] = '\0';
    return arr;
}
