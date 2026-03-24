typedef struct {
    int events[1000][2];
    int overlaps[1000][2];
    int eSize;
    int oSize;
} MyCalendarTwo;

MyCalendarTwo* myCalendarTwoCreate() {
    MyCalendarTwo* obj = (MyCalendarTwo*)calloc(1, sizeof(MyCalendarTwo));
    return obj;
}

bool myCalendarTwoBook(MyCalendarTwo* obj, int start, int end) {
    for (int i = 0; i < obj->oSize; i++) {
        if (start < obj->overlaps[i][1] && end > obj->overlaps[i][0]) return false;
    }
    for (int i = 0; i < obj->eSize; i++) {
        if (start < obj->events[i][1] && end > obj->events[i][0]) {
            int os = start > obj->events[i][0] ? start : obj->events[i][0];
            int oe = end < obj->events[i][1] ? end : obj->events[i][1];
            obj->overlaps[obj->oSize][0] = os;
            obj->overlaps[obj->oSize][1] = oe;
            obj->oSize++;
        }
    }
    obj->events[obj->eSize][0] = start;
    obj->events[obj->eSize][1] = end;
    obj->eSize++;
    return true;
}

void myCalendarTwoFree(MyCalendarTwo* obj) {
    free(obj);
}
