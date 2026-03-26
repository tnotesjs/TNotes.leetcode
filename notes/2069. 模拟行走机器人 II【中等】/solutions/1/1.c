typedef struct {
    int w, h, perimeter, pos;
    bool moved;
} Robot;

Robot* robotCreate(int width, int height) {
    Robot* obj = (Robot*)malloc(sizeof(Robot));
    obj->w = width;
    obj->h = height;
    obj->perimeter = 2 * (width + height - 2);
    obj->pos = 0;
    obj->moved = false;
    return obj;
}

void robotStep(Robot* obj, int num) {
    obj->moved = true;
    obj->pos = (obj->pos + num) % obj->perimeter;
}

int* robotGetPos(Robot* obj, int* returnSize) {
    *returnSize = 2;
    int* res = (int*)malloc(2 * sizeof(int));
    int p = obj->pos;
    if (p < obj->w) { res[0] = p; res[1] = 0; return res; }
    p -= obj->w - 1;
    if (p < obj->h) { res[0] = obj->w - 1; res[1] = p; return res; }
    p -= obj->h - 1;
    if (p < obj->w) { res[0] = obj->w - 1 - p; res[1] = obj->h - 1; return res; }
    p -= obj->w - 1;
    res[0] = 0; res[1] = obj->h - 1 - p;
    return res;
}

char* robotGetDir(Robot* obj) {
    if (!obj->moved) return "East";
    int p = obj->pos;
    if (p == 0) return "South";
    if (p < obj->w) return "East";
    p -= obj->w - 1;
    if (p < obj->h) return "North";
    p -= obj->h - 1;
    if (p < obj->w) return "West";
    return "South";
}

void robotFree(Robot* obj) {
    free(obj);
}
