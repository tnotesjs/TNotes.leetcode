int numComponents(struct ListNode* head, int* nums, int numsSize) {
    bool set[10001] = {false};
    for (int i = 0; i < numsSize; i++) set[nums[i]] = true;
    int res = 0;
    bool inComp = false;
    while (head) {
        if (set[head->val]) {
            if (!inComp) { res++; inComp = true; }
        } else {
            inComp = false;
        }
        head = head->next;
    }
    return res;
}
