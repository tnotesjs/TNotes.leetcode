int maxAbsValExpr(int* arr1, int arr1Size, int* arr2, int arr2Size) {
    int n = arr1Size;
    int res = 0;
    int signs[4][2] = {{1,1},{1,-1},{-1,1},{-1,-1}};
    for (int s = 0; s < 4; s++) {
        int p = signs[s][0], q = signs[s][1];
        int minVal = INT_MAX;
        for (int i = 0; i < n; i++) {
            int val = p * arr1[i] + q * arr2[i] + i;
            if (val - minVal > res) res = val - minVal;
            if (val < minVal) minVal = val;
        }
    }
    return res;
}
