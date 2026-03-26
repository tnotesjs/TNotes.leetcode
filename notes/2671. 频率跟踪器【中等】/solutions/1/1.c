typedef struct {
    int* numCount;
    int* freqCount;
} FrequencyTracker;

FrequencyTracker* frequencyTrackerCreate() {
    FrequencyTracker* obj = (FrequencyTracker*)malloc(sizeof(FrequencyTracker));
    obj->numCount = (int*)calloc(100001, sizeof(int));
    obj->freqCount = (int*)calloc(200002, sizeof(int));
    return obj;
}

void frequencyTrackerAdd(FrequencyTracker* obj, int number) {
    int oldFreq = obj->numCount[number];
    if (oldFreq > 0) obj->freqCount[oldFreq]--;
    obj->numCount[number] = oldFreq + 1;
    obj->freqCount[oldFreq + 1]++;
}

void frequencyTrackerDeleteOne(FrequencyTracker* obj, int number) {
    int oldFreq = obj->numCount[number];
    if (oldFreq == 0) return;
    obj->freqCount[oldFreq]--;
    obj->numCount[number] = oldFreq - 1;
    if (oldFreq - 1 > 0) obj->freqCount[oldFreq - 1]++;
}

bool frequencyTrackerHasFrequency(FrequencyTracker* obj, int frequency) {
    return obj->freqCount[frequency] > 0;
}

void frequencyTrackerFree(FrequencyTracker* obj) {
    free(obj->numCount);
    free(obj->freqCount);
    free(obj);
}
