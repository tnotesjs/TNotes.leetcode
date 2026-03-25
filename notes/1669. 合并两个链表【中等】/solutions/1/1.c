struct ListNode* mergeInBetween(struct ListNode* list1, int a, int b,
                                struct ListNode* list2) {
    struct ListNode* prev = list1;
    for (int i = 0; i < a - 1; i++) prev = prev->next;
    struct ListNode* after = prev;
    for (int i = 0; i <= b - a + 1; i++) after = after->next;
    prev->next = list2;
    struct ListNode* tail = list2;
    while (tail->next) tail = tail->next;
    tail->next = after;
    return list1;
}
