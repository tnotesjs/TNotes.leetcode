int maximumGroups(int* grades, int gradesSize) {
    int k = 0;
    while ((long long)(k + 1) * (k + 2) / 2 <= gradesSize) k++;
    return k;
}
