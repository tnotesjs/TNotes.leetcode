typedef struct Entry2365 {
    int key;
    long long day;
    struct Entry2365* next;
} Entry2365;

long long taskSchedulerII(int* tasks, int tasksSize, int space) {
    int size = 100003;
    Entry2365** table = (Entry2365**)calloc(size, sizeof(Entry2365*));
    long long day = 0;
    for (int i = 0; i < tasksSize; i++) {
        day++;
        int h = ((tasks[i] % size) + size) % size;
        Entry2365* cur = table[h];
        while (cur && cur->key != tasks[i]) cur = cur->next;
        if (cur) {
            if (day < cur->day + space + 1) day = cur->day + space + 1;
            cur->day = day;
        } else {
            Entry2365* node = (Entry2365*)malloc(sizeof(Entry2365));
            node->key = tasks[i];
            node->day = day;
            node->next = table[h];
            table[h] = node;
        }
    }
    for (int i = 0; i < size; i++) {
        Entry2365* cur = table[i];
        while (cur) { Entry2365* tmp = cur; cur = cur->next; free(tmp); }
    }
    free(table);
    return day;
}
