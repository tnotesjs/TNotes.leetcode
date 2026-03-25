int shipWithinDays(int* weights, int weightsSize, int days) {
    int left = 0, right = 0;
    for (int i = 0; i < weightsSize; i++) {
        if (weights[i] > left) left = weights[i];
        right += weights[i];
    }
    while (left < right) {
        int mid = left + (right - left) / 2;
        int need = 1, cur = 0;
        for (int i = 0; i < weightsSize; i++) {
            if (cur + weights[i] > mid) {
                need++;
                cur = 0;
            }
            cur += weights[i];
        }
        if (need <= days) right = mid;
        else left = mid + 1;
    }
    return left;
}
