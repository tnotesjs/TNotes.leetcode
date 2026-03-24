typedef struct {
    int starts[1000];
    int ends[1000];
    int size;
} MyCalendar;

MyCalendar* myCalendarCreate() {
    MyCalendar* obj = (MyCalendar*)calloc(1, sizeof(MyCalendar));
    return obj;
}

bool myCalendarBook(MyCalendar* obj, int start, int end) {
    for (int i = 0; i < obj->size; i++) {
        if (start < obj->ends[i] && end > obj->starts[i]) return false;
    }
    obj->starts[obj->size] = start;
    obj->ends[obj->size] = end;
    obj->size++;
    return true;
}

void myCalendarFree(MyCalendar* obj) {
    free(obj);
}
