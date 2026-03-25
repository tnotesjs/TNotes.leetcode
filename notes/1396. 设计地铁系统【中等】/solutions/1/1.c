#define MAX_ID 1000001
#define HASH_SIZE 10007

typedef struct {
    char startStation[11];
    int startTime;
} CheckIn;

typedef struct RouteNode {
    char key[23]; // "start->end"
    double totalTime;
    int count;
    struct RouteNode* next;
} RouteNode;

typedef struct {
    CheckIn checkIns[MAX_ID];
    RouteNode* routes[HASH_SIZE];
} UndergroundSystem;

unsigned hashStr(const char* s) {
    unsigned h = 0;
    while (*s) h = h * 31 + *s++;
    return h % HASH_SIZE;
}

UndergroundSystem* undergroundSystemCreate() {
    UndergroundSystem* obj = (UndergroundSystem*)calloc(1, sizeof(UndergroundSystem));
    return obj;
}

void undergroundSystemCheckIn(UndergroundSystem* obj, int id, char* stationName, int t) {
    strcpy(obj->checkIns[id].startStation, stationName);
    obj->checkIns[id].startTime = t;
}

void undergroundSystemCheckOut(UndergroundSystem* obj, int id, char* stationName, int t) {
    char key[23];
    sprintf(key, "%s->%s", obj->checkIns[id].startStation, stationName);
    unsigned h = hashStr(key);
    RouteNode* cur = obj->routes[h];
    while (cur && strcmp(cur->key, key) != 0) cur = cur->next;
    if (!cur) {
        cur = (RouteNode*)calloc(1, sizeof(RouteNode));
        strcpy(cur->key, key);
        cur->next = obj->routes[h];
        obj->routes[h] = cur;
    }
    cur->totalTime += t - obj->checkIns[id].startTime;
    cur->count++;
}

double undergroundSystemGetAverageTime(UndergroundSystem* obj, char* startStation, char* endStation) {
    char key[23];
    sprintf(key, "%s->%s", startStation, endStation);
    unsigned h = hashStr(key);
    RouteNode* cur = obj->routes[h];
    while (cur && strcmp(cur->key, key) != 0) cur = cur->next;
    return cur->totalTime / cur->count;
}

void undergroundSystemFree(UndergroundSystem* obj) {
    for (int i = 0; i < HASH_SIZE; i++) {
        RouteNode* cur = obj->routes[i];
        while (cur) { RouteNode* tmp = cur; cur = cur->next; free(tmp); }
    }
    free(obj);
}
