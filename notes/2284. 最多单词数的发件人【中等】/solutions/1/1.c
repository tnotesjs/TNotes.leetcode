typedef struct {
    char sender[100];
    int count;
} Sender2284;

int countWords(const char* msg) {
    int cnt = 1;
    while (*msg) {
        if (*msg == ' ') cnt++;
        msg++;
    }
    return cnt;
}

char* largestWordCount(char** messages, int messagesSize, char** senders, int sendersSize) {
    Sender2284* map = (Sender2284*)calloc(messagesSize, sizeof(Sender2284));
    int mapSize = 0;
    for (int i = 0; i < messagesSize; i++) {
        int words = countWords(messages[i]);
        int found = -1;
        for (int j = 0; j < mapSize; j++) {
            if (strcmp(map[j].sender, senders[i]) == 0) {
                found = j;
                break;
            }
        }
        if (found >= 0) {
            map[found].count += words;
        } else {
            strcpy(map[mapSize].sender, senders[i]);
            map[mapSize].count = words;
            mapSize++;
        }
    }
    int maxCnt = 0, resIdx = 0;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].count > maxCnt || (map[i].count == maxCnt && strcmp(map[i].sender, map[resIdx].sender) > 0)) {
            maxCnt = map[i].count;
            resIdx = i;
        }
    }
    char* res = (char*)malloc(100);
    strcpy(res, map[resIdx].sender);
    free(map);
    return res;
}
