int maxArea(int* height, int heightSize) {
    int l = 0, r = heightSize - 1, max_area = 0;
    while (l < r) {
        int h = height[l] < height[r] ? height[l] : height[r];
        int area = (r - l) * h;
        if (area > max_area) max_area = area;
        if (height[l] < height[r]) l++; else r--;
    }
    return max_area;
}
