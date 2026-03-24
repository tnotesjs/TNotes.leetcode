typedef struct Node {
    char* word;
    struct Node* next;
} Node;

int numMatchingSubseq(char* s, char** words, int wordsSize) {
    Node* buckets[26] = {0};
    for (int i = 0; i < wordsSize; i++) {
        int idx = words[i][0] - 'a';
        Node* node = (Node*)malloc(sizeof(Node));
        node->word = words[i];
        node->next = buckets[idx];
        buckets[idx] = node;
    }
    int res = 0;
    for (int i = 0; s[i]; i++) {
        int idx = s[i] - 'a';
        Node* cur = buckets[idx];
        buckets[idx] = NULL;
        while (cur) {
            Node* next = cur->next;
            cur->word++;
            if (*cur->word == '\0') {
                res++;
                free(cur);
            } else {
                int nIdx = cur->word[0] - 'a';
                cur->next = buckets[nIdx];
                buckets[nIdx] = cur;
            }
            cur = next;
        }
    }
    for (int i = 0; i < 26; i++) {
        Node* cur = buckets[i];
        while (cur) { Node* next = cur->next; free(cur); cur = next; }
    }
    return res;
}
