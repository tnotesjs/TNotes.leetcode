int minCostSetTime(int startAt, int moveCost, int pushCost, int targetSeconds) {
    int res = 0x7fffffff;
    for (int mm = 0; mm <= 99; mm++) {
        int ss = targetSeconds - mm * 60;
        if (ss < 0 || ss > 99) continue;
        int time = mm * 100 + ss;
        int digits[4], len = 0;
        if (time == 0) {
            digits[len++] = 0;
        } else {
            int t = time;
            while (t > 0) { digits[len++] = t % 10; t /= 10; }
            // 反转
            for (int i = 0; i < len / 2; i++) {
                int tmp = digits[i]; digits[i] = digits[len - 1 - i]; digits[len - 1 - i] = tmp;
            }
        }
        int cost = 0, cur = startAt;
        for (int i = 0; i < len; i++) {
            if (cur != digits[i]) { cost += moveCost; cur = digits[i]; }
            cost += pushCost;
        }
        if (cost < res) res = cost;
    }
    return res;
}
