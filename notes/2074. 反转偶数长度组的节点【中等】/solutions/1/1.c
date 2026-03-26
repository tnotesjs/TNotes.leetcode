/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* reverseEvenLengthGroups(struct ListNode* head) {
    int n = 0;
    struct ListNode* cur = head;
    while (cur) { n++; cur = cur->next; }
    int* vals = (int*)malloc(n * sizeof(int));
    cur = head;
    for (int i = 0; i < n; i++) { vals[i] = cur->val; cur = cur->next; }
    int idx = 0, group = 1;
    while (idx < n) {
        int len = group < n - idx ? group : n - idx;
        if (len % 2 == 0) {
            int l = idx, r = idx + len - 1;
            while (l < r) {
                int tmp = vals[l]; vals[l] = vals[r]; vals[r] = tmp;
                l++; r--;
            }
        }
        idx += len;
        group++;
    }
    cur = head;
    for (int i = 0; i < n; i++) { cur->val = vals[i]; cur = cur->next; }
    free(vals);
    return head;
}
