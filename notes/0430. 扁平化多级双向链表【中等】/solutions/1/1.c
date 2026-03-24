struct Node* flatten(struct Node* head) {
    struct Node* cur = head;
    while (cur) {
        if (cur->child) {
            struct Node* next = cur->next;
            struct Node* child = cur->child;
            cur->next = child;
            child->prev = cur;
            cur->child = NULL;
            struct Node* tail = child;
            while (tail->next) tail = tail->next;
            tail->next = next;
            if (next) next->prev = tail;
        }
        cur = cur->next;
    }
    return head;
}
