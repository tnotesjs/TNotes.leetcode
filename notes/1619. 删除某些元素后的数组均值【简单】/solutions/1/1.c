int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

double trimMean(int* arr, int arrSize) {
    qsort(arr, arrSize, sizeof(int), cmp);
    
    int cut = arrSize / 20;
    double sum = 0;
    
    for (int i = cut; i < arrSize - cut; i++) {
        sum += arr[i];
    }
    
    return sum / (arrSize - 2 * cut);
}
