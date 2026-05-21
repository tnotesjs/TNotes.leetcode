int lengthOfLastWord(char* s) {
    int left = 0;
    int right = 0;
    while (s[right] != '\0') {
        right++;
    }
    right--;

    while (s[left] == ' ') {
        left++;
    }
    while (right >= 0 && s[right] == ' ') {
        right--;
    }

    int trimmedLength = right - left + 1;
    char* trimmed = (char*)malloc(sizeof(char) * (trimmedLength + 1));
    for (int i = 0; i < trimmedLength; i++) {
        trimmed[i] = s[left + i];
    }
    trimmed[trimmedLength] = '\0';

    int lastLength = 0;
    char* token = strtok(trimmed, " ");
    while (token != NULL) {
        lastLength = strlen(token);
        token = strtok(NULL, " ");
    }

    free(trimmed);
    return lastLength;
}
