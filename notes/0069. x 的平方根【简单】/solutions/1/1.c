int mySqrt(int x) {
    if (x == 0)
        return 0;

    long long left = 1, right = x, result = 0;
    while (left <= right) {
        long long mid = (left + right) / 2;
        if (mid <= x / mid) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return (int)result;
}
