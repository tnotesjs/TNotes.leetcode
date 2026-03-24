typedef struct Node {
    int val;
    struct Node* next;
} Node;

typedef struct {
    Node* head;
    int size;
} MyLinkedList;

MyLinkedList* myLinkedListCreate() {
    MyLinkedList* obj = (MyLinkedList*)calloc(1, sizeof(MyLinkedList));
    return obj;
}

int myLinkedListGet(MyLinkedList* obj, int index) {
    if (index < 0 || index >= obj->size) return -1;
    Node* cur = obj->head;
    for (int i = 0; i < index; i++) cur = cur->next;
    return cur->val;
}

void myLinkedListAddAtIndex(MyLinkedList* obj, int index, int val) {
    if (index > obj->size) return;
    if (index < 0) index = 0;
    Node* node = (Node*)malloc(sizeof(Node));
    node->val = val; node->next = NULL;
    if (index == 0) {
        node->next = obj->head;
        obj->head = node;
    } else {
        Node* prev = obj->head;
        for (int i = 0; i < index - 1; i++) prev = prev->next;
        node->next = prev->next;
        prev->next = node;
    }
    obj->size++;
}

void myLinkedListAddAtHead(MyLinkedList* obj, int val) {
    myLinkedListAddAtIndex(obj, 0, val);
}

void myLinkedListAddAtTail(MyLinkedList* obj, int val) {
    myLinkedListAddAtIndex(obj, obj->size, val);
}

void myLinkedListDeleteAtIndex(MyLinkedList* obj, int index) {
    if (index < 0 || index >= obj->size) return;
    Node* del;
    if (index == 0) {
        del = obj->head;
        obj->head = obj->head->next;
    } else {
        Node* prev = obj->head;
        for (int i = 0; i < index - 1; i++) prev = prev->next;
        del = prev->next;
        prev->next = del->next;
    }
    free(del);
    obj->size--;
}

void myLinkedListFree(MyLinkedList* obj) {
    Node* cur = obj->head;
    while (cur) { Node* tmp = cur; cur = cur->next; free(tmp); }
    free(obj);
}
