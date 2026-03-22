int maxArea(int* height, int heightSize) {
    int n = heightSize;
    int maxA = (n - 1) * (height[0] < height[n - 1] ? height[0] : height[n - 1]);

    // -> 以左柱为基准，找距离左柱最远的且高度大于等于左柱的右柱
    for (int l = 0; l < n; l++) {
        for (int r = n - 1; r > l; r--) {
            if (height[r] >= height[l]) {
                int area = (r - l) * height[l];
                if (area > maxA) maxA = area;
                break;
            }
        }
    }

    // <- 以右柱为基准，找距离右柱最远的且高度大于等于右柱的左柱
    for (int r = n - 1; r > 0; r--) {
        for (int l = 0; l < r; l++) {
            if (height[l] >= height[r]) {
                int area = (r - l) * height[r];
                if (area > maxA) maxA = area;
                break;
            }
        }
    }

    return maxA;
}
