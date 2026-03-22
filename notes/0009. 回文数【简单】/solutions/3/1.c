bool isPalindrome(int x) {
    if (x < 0) return false;
    char buf[12];
    sprintf(buf, "%d", x);
    int left = 0, right = strlen(buf) - 1;
    while (left < right) {
        if (buf[left] != buf[right]) return false;
        left++;
        right--;
    }
    return true;
}
