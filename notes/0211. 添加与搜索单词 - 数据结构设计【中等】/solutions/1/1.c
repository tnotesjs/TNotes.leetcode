typedef struct WordDictionary {
    struct WordDictionary* children[26];
    bool isEnd;
} WordDictionary;

WordDictionary* wordDictionaryCreate() {
    return (WordDictionary*)calloc(1, sizeof(WordDictionary));
}

void wordDictionaryAddWord(WordDictionary* obj, char* word) {
    for (int i = 0; word[i]; i++) {
        int idx = word[i] - 'a';
        if (!obj->children[idx]) obj->children[idx] = wordDictionaryCreate();
        obj = obj->children[idx];
    }
    obj->isEnd = true;
}

bool dfsSearch(WordDictionary* node, char* word, int i) {
    if (!word[i]) return node->isEnd;
    if (word[i] == '.') {
        for (int k = 0; k < 26; k++) {
            if (node->children[k] && dfsSearch(node->children[k], word, i + 1))
                return true;
        }
        return false;
    }
    int idx = word[i] - 'a';
    if (!node->children[idx]) return false;
    return dfsSearch(node->children[idx], word, i + 1);
}

bool wordDictionarySearch(WordDictionary* obj, char* word) {
    return dfsSearch(obj, word, 0);
}

void wordDictionaryFree(WordDictionary* obj) {
    for (int i = 0; i < 26; i++) {
        if (obj->children[i]) wordDictionaryFree(obj->children[i]);
    }
    free(obj);
}
