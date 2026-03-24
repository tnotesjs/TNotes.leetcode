typedef struct {
    struct ListNode* head;
} Solution;

Solution* solutionCreate(struct ListNode* head) {
    Solution* obj = (Solution*)malloc(sizeof(Solution));
    obj->head = head;
    return obj;
}

int solutionGetRandom(Solution* obj) {
    int res = 0, i = 1;
    struct ListNode* node = obj->head;
    while (node) {
        if (rand() % i == 0) res = node->val;
        node = node->next;
        i++;
    }
    return res;
}

void solutionFree(Solution* obj) { free(obj); }
