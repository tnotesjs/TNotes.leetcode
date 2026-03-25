int numTeams(int* rating, int ratingSize) {
    int res = 0;
    for (int j = 1; j < ratingSize - 1; j++) {
        int leftLess = 0, leftGreater = 0;
        int rightLess = 0, rightGreater = 0;
        for (int i = 0; i < j; i++) {
            if (rating[i] < rating[j]) leftLess++;
            else leftGreater++;
        }
        for (int k = j + 1; k < ratingSize; k++) {
            if (rating[k] > rating[j]) rightGreater++;
            else rightLess++;
        }
        res += leftLess * rightGreater + leftGreater * rightLess;
    }
    return res;
}
