int numSteps(char* s) {
    int n = strlen(s), steps = 0, carry = 0;
    for (int i = n - 1; i > 0; i--) {
        int bit = (s[i] - '0') + carry;
        if (bit % 2 == 1) {
            steps += 2;
            carry = 1;
        } else {
            steps += 1;
        }
    }
    return steps + carry;
}
