int* addNegabinary(int* arr1, int arr1Size, int* arr2, int arr2Size, int* returnSize) {
    int maxLen = (arr1Size > arr2Size ? arr1Size : arr2Size) + 3;
    int* tmp = malloc(maxLen * sizeof(int));
    int i = arr1Size - 1, j = arr2Size - 1, carry = 0, k = 0;
    while (i >= 0 || j >= 0 || carry != 0) {
        int sum = carry;
        if (i >= 0) sum += arr1[i--];
        if (j >= 0) sum += arr2[j--];
        tmp[k++] = sum & 1;
        carry = -(sum >> 1);
    }
    while (k > 1 && tmp[k - 1] == 0) k--;
    int* res = malloc(k * sizeof(int));
    for (int p = 0; p < k; p++) res[p] = tmp[k - 1 - p];
    free(tmp);
    *returnSize = k;
    return res;
}
