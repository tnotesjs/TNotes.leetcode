uint32_t reverseBits(uint32_t n) {
    uint32_t result = 0;
    for (int i = 0; i < 32; i++) {
        // result 左移腾出最低位；取 n 的最低位拼进去；n 右移处理下一位
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    return result;
}
