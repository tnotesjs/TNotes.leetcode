int findSpecialInteger(int* arr, int arrSize) {
    int limit = arrSize / 4;
    int count = 1;

    for (int i = 1; i < arrSize; i++) {
        count = (arr[i] == arr[i - 1]) ? count + 1 : 1;
        if (count > limit) {
            return arr[i];
        }
    }

    return arr[0];
}
