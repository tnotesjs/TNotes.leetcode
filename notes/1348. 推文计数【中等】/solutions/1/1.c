typedef struct {
    char** names;
    int** times;
    int* counts;
    int* caps;
    int size;
} TweetCounts;

TweetCounts* tweetCountsCreate() {
    TweetCounts* obj = malloc(sizeof(TweetCounts));
    obj->names = malloc(sizeof(char*) * 10001);
    obj->times = malloc(sizeof(int*) * 10001);
    obj->counts = calloc(10001, sizeof(int));
    obj->caps = malloc(sizeof(int) * 10001);
    obj->size = 0;
    return obj;
}

int findName(TweetCounts* obj, char* name) {
    for (int i = 0; i < obj->size; i++)
        if (strcmp(obj->names[i], name) == 0) return i;
    return -1;
}

void tweetCountsRecordTweet(TweetCounts* obj, char* tweetName, int time) {
    int idx = findName(obj, tweetName);
    if (idx == -1) {
        idx = obj->size++;
        obj->names[idx] = strdup(tweetName);
        obj->caps[idx] = 100;
        obj->times[idx] = malloc(sizeof(int) * 100);
        obj->counts[idx] = 0;
    }
    if (obj->counts[idx] >= obj->caps[idx]) {
        obj->caps[idx] *= 2;
        obj->times[idx] = realloc(obj->times[idx], sizeof(int) * obj->caps[idx]);
    }
    obj->times[idx][obj->counts[idx]++] = time;
}

int* tweetCountsGetTweetCountsPerFrequency(TweetCounts* obj, char* freq, char* tweetName,
    int startTime, int endTime, int* returnSize) {
    int interval = strcmp(freq, "minute") == 0 ? 60 : strcmp(freq, "hour") == 0 ? 3600 : 86400;
    int buckets = (endTime - startTime) / interval + 1;
    int* res = calloc(buckets, sizeof(int));
    *returnSize = buckets;
    int idx = findName(obj, tweetName);
    if (idx == -1) return res;
    for (int i = 0; i < obj->counts[idx]; i++) {
        int t = obj->times[idx][i];
        if (t >= startTime && t <= endTime)
            res[(t - startTime) / interval]++;
    }
    return res;
}

void tweetCountsFree(TweetCounts* obj) {
    for (int i = 0; i < obj->size; i++) {
        free(obj->names[i]);
        free(obj->times[i]);
    }
    free(obj->names); free(obj->times); free(obj->counts); free(obj->caps); free(obj);
}
