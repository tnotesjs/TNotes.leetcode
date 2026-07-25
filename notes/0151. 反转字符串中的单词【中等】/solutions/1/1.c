void reverse(char* s, int left, int right) {
    while (left < right) {
        char tmp = s[left];
        s[left++] = s[right];
        s[right--] = tmp;
    }
}

char* reverseWords(char* s) {
    int len = strlen(s);

    // 第一步：整体反转
    reverse(s, 0, len - 1);

    // 第二步 + 第三步：逐单词反转 + 压缩空格
    int write = 0, read = 0;
    while (read < len) {
        while (read < len && s[read] == ' ')
            read++;
        if (read >= len)
            break;

        // 单词间加空格（第一个单词前不加）
        if (write > 0)
            s[write++] = ' ';

        // 记录单词起始，边复制边反转
        int wordStart = write;
        while (read < len && s[read] != ' ')
            s[write++] = s[read++];
        reverse(s, wordStart, write - 1);
    }

    s[write] = '\0';
    return s;
}

// 注：C 的字符串为可变 char 数组，可直接原地修改，实现真正的 O(1) 额外空间
