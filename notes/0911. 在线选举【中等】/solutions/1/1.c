typedef struct {
    int* times;
    int* leaders;
    int size;
} TopVotedCandidate;

TopVotedCandidate* topVotedCandidateCreate(int* persons, int personsSize, int* times, int timesSize) {
    TopVotedCandidate* obj = (TopVotedCandidate*)malloc(sizeof(TopVotedCandidate));
    obj->size = personsSize;
    obj->times = (int*)malloc(sizeof(int) * personsSize);
    obj->leaders = (int*)malloc(sizeof(int) * personsSize);
    memcpy(obj->times, times, sizeof(int) * personsSize);
    int votes[5001];
    memset(votes, 0, sizeof(votes));
    int lead = -1, leadVotes = 0;
    for (int i = 0; i < personsSize; i++) {
        votes[persons[i]]++;
        if (votes[persons[i]] >= leadVotes) { lead = persons[i]; leadVotes = votes[persons[i]]; }
        obj->leaders[i] = lead;
    }
    return obj;
}

int topVotedCandidateQ(TopVotedCandidate* obj, int t) {
    int lo = 0, hi = obj->size - 1;
    while (lo < hi) {
        int mid = (lo + hi + 1) / 2;
        if (obj->times[mid] <= t) lo = mid; else hi = mid - 1;
    }
    return obj->leaders[lo];
}

void topVotedCandidateFree(TopVotedCandidate* obj) { free(obj->times); free(obj->leaders); free(obj); }
