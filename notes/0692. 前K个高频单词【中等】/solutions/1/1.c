typedef struct { char* word; int count; } WordFreq;

int cmp(const void* a, const void* b) {
    const WordFreq* wa = (const WordFreq*)a;
    const WordFreq* wb = (const WordFreq*)b;
    if (wa->count != wb->count) return wb->count - wa->count;
    return strcmp(wa->word, wb->word);
}

char** topKFrequent(char** words, int wordsSize, int k, int* returnSize) {
    // 先排序来分组
    qsort(words, wordsSize, sizeof(char*), (int(*)(const void*,const void*))strcmp);
    WordFreq* wf = (WordFreq*)malloc(sizeof(WordFreq) * wordsSize);
    int n = 0;
    for (int i = 0; i < wordsSize;) {
        int j = i;
        while (j < wordsSize && strcmp(words[i], words[j]) == 0) j++;
        wf[n].word = words[i];
        wf[n].count = j - i;
        n++; i = j;
    }
    qsort(wf, n, sizeof(WordFreq), cmp);
    char** res = (char**)malloc(sizeof(char*) * k);
    for (int i = 0; i < k; i++) res[i] = wf[i].word;
    free(wf);
    *returnSize = k;
    return res;
}
