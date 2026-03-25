typedef struct {
    char** history;
    int cur;
    int size;
} BrowserHistory;

BrowserHistory* browserHistoryCreate(char* homepage) {
    BrowserHistory* obj = (BrowserHistory*)malloc(sizeof(BrowserHistory));
    obj->history = (char**)malloc(5001 * sizeof(char*));
    obj->history[0] = homepage;
    obj->cur = 0;
    obj->size = 1;
    return obj;
}

void browserHistoryVisit(BrowserHistory* obj, char* url) {
    obj->cur++;
    obj->history[obj->cur] = url;
    obj->size = obj->cur + 1;
}

char* browserHistoryBack(BrowserHistory* obj, int steps) {
    obj->cur -= steps;
    if (obj->cur < 0) obj->cur = 0;
    return obj->history[obj->cur];
}

char* browserHistoryForward(BrowserHistory* obj, int steps) {
    obj->cur += steps;
    if (obj->cur >= obj->size) obj->cur = obj->size - 1;
    return obj->history[obj->cur];
}

void browserHistoryFree(BrowserHistory* obj) {
    free(obj->history);
    free(obj);
}
