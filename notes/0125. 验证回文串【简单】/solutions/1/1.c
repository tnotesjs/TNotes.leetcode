bool isPalindrome(char* s) {
    int i = 0, j = strlen(s) - 1;

    while (i < j) {
        // 跳过非字母数字字符
        while (i < j && !isalnum(s[i]))
            i++;
        while (i < j && !isalnum(s[j]))
            j--;

        if (tolower(s[i]) != tolower(s[j]))
            return false;

        i++;
        j--;
    }

    return true;
}
