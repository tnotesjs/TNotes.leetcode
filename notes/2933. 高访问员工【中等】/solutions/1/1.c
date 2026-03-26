typedef struct {
    char name[11];
    int minutes;
} Entry;

int cmpEntry(const void *a, const void *b) {
    Entry *ea = (Entry *)a, *eb = (Entry *)b;
    int c = strcmp(ea->name, eb->name);
    if (c != 0) return c;
    return ea->minutes - eb->minutes;
}

char** findHighAccessEmployees(char*** access_times, int access_timesSize, int* access_timesColSize, int* returnSize) {
    Entry *entries = malloc(access_timesSize * sizeof(Entry));
    for (int i = 0; i < access_timesSize; i++) {
        strcpy(entries[i].name, access_times[i][0]);
        char *t = access_times[i][1];
        entries[i].minutes = (t[0] - '0') * 600 + (t[1] - '0') * 60 + (t[2] - '0') * 10 + (t[3] - '0');
    }
    qsort(entries, access_timesSize, sizeof(Entry), cmpEntry);
    char **result = malloc(access_timesSize * sizeof(char *));
    *returnSize = 0;
    for (int i = 2; i < access_timesSize; i++) {
        if (strcmp(entries[i].name, entries[i - 2].name) == 0 &&
            entries[i].minutes - entries[i - 2].minutes < 60) {
            if (*returnSize == 0 || strcmp(result[*returnSize - 1], entries[i].name) != 0) {
                result[*returnSize] = malloc(11);
                strcpy(result[*returnSize], entries[i].name);
                (*returnSize)++;
            }
        }
    }
    free(entries);
    return result;
}
