typedef struct {
    int* arr;
    int cap;
    int front;
    int rear;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = (MyCircularDeque*)malloc(sizeof(MyCircularDeque));
    obj->cap = k + 1;
    obj->arr = (int*)malloc(sizeof(int) * obj->cap);
    obj->front = 0;
    obj->rear = 0;
    return obj;
}

bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if ((obj->rear + 1) % obj->cap == obj->front) return false;
    obj->front = (obj->front - 1 + obj->cap) % obj->cap;
    obj->arr[obj->front] = value;
    return true;
}

bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if ((obj->rear + 1) % obj->cap == obj->front) return false;
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->cap;
    return true;
}

bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->front == obj->rear) return false;
    obj->front = (obj->front + 1) % obj->cap;
    return true;
}

bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->front == obj->rear) return false;
    obj->rear = (obj->rear - 1 + obj->cap) % obj->cap;
    return true;
}

int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->front == obj->rear) return -1;
    return obj->arr[obj->front];
}

int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->front == obj->rear) return -1;
    return obj->arr[(obj->rear - 1 + obj->cap) % obj->cap];
}

bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->front == obj->rear;
}

bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return (obj->rear + 1) % obj->cap == obj->front;
}

void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->arr);
    free(obj);
}
