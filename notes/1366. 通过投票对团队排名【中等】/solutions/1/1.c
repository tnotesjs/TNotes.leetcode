int teamCount;
int counts[26][26];

int cmpTeams(const void* a, const void* b) {
    int ia = *(char*)a - 'A', ib = *(char*)b - 'A';
    for (int i = 0; i < teamCount; i++) {
        if (counts[ia][i] != counts[ib][i]) return counts[ib][i] - counts[ia][i];
    }
    return ia - ib;
}

char* rankTeams(char** votes, int votesSize) {
    teamCount = strlen(votes[0]);
    memset(counts, 0, sizeof(counts));
    for (int i = 0; i < votesSize; i++) {
        for (int j = 0; j < teamCount; j++) {
            counts[votes[i][j] - 'A'][j]++;
        }
    }
    char* res = malloc(teamCount + 1);
    strcpy(res, votes[0]);
    qsort(res, teamCount, sizeof(char), cmpTeams);
    res[teamCount] = '\0';
    return res;
}
