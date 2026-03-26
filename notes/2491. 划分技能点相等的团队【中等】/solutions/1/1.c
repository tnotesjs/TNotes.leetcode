int cmp2491(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

long long dividePlayers(int* skill, int skillSize) {
    qsort(skill, skillSize, sizeof(int), cmp2491);
    int target = skill[0] + skill[skillSize - 1];
    long long chemistry = 0;
    for (int i = 0; i < skillSize / 2; i++) {
        if (skill[i] + skill[skillSize - 1 - i] != target) return -1;
        chemistry += (long long)skill[i] * skill[skillSize - 1 - i];
    }
    return chemistry;
}
