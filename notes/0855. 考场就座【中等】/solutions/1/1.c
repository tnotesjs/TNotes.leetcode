typedef struct {
    int* seats;
    int size;
    int n;
} ExamRoom;

ExamRoom* examRoomCreate(int n) {
    ExamRoom* obj = (ExamRoom*)malloc(sizeof(ExamRoom));
    obj->seats = (int*)malloc(sizeof(int) * n);
    obj->size = 0;
    obj->n = n;
    return obj;
}

int examRoomSeat(ExamRoom* obj) {
    if (obj->size == 0) { obj->seats[obj->size++] = 0; return 0; }
    int maxDist = obj->seats[0], best = 0;
    for (int i = 1; i < obj->size; i++) {
        int d = (obj->seats[i] - obj->seats[i - 1]) / 2;
        if (d > maxDist) { maxDist = d; best = obj->seats[i - 1] + d; }
    }
    if (obj->n - 1 - obj->seats[obj->size - 1] > maxDist) best = obj->n - 1;
    int idx = obj->size;
    for (int i = 0; i < obj->size; i++) { if (obj->seats[i] > best) { idx = i; break; } }
    memmove(obj->seats + idx + 1, obj->seats + idx, sizeof(int) * (obj->size - idx));
    obj->seats[idx] = best;
    obj->size++;
    return best;
}

void examRoomLeave(ExamRoom* obj, int p) {
    int idx = 0;
    for (int i = 0; i < obj->size; i++) { if (obj->seats[i] == p) { idx = i; break; } }
    memmove(obj->seats + idx, obj->seats + idx + 1, sizeof(int) * (obj->size - idx - 1));
    obj->size--;
}

void examRoomFree(ExamRoom* obj) { free(obj->seats); free(obj); }
