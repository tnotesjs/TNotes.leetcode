/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* nodesBetweenCriticalPoints(struct ListNode* head, int* returnSize) {
    *returnSize = 2;
    int* ans = (int*)malloc(2 * sizeof(int));
    ans[0] = -1; ans[1] = -1;
    struct ListNode* prev = head;
    struct ListNode* cur = head->next;
    int idx = 1, first = -1, last = -1, minDist = INT_MAX;
    while (cur->next) {
        if ((cur->val > prev->val && cur->val > cur->next->val) ||
            (cur->val < prev->val && cur->val < cur->next->val)) {
            if (first == -1) first = idx;
            if (last != -1 && idx - last < minDist) minDist = idx - last;
            last = idx;
        }
        prev = cur;
        cur = cur->next;
        idx++;
    }
    if (first != -1 && first != last) {
        ans[0] = minDist;
        ans[1] = last - first;
    }
    return ans;
}
