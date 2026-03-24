bool isValidSerialization(char* preorder) {
    int slots = 1;
    char* token = strtok(preorder, ",");
    while (token) {
        slots--;
        if (slots < 0) return false;
        if (token[0] != '#') slots += 2;
        token = strtok(NULL, ",");
    }
    return slots == 0;
}
