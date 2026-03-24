typedef struct Trie {
    struct Trie* children[26];
    bool isEnd;
} Trie;

Trie* trieCreate() {
    Trie* node = (Trie*)calloc(1, sizeof(Trie));
    return node;
}

void trieInsert(Trie* obj, char* word) {
    for (int i = 0; word[i]; i++) {
        int idx = word[i] - 'a';
        if (!obj->children[idx]) obj->children[idx] = trieCreate();
        obj = obj->children[idx];
    }
    obj->isEnd = true;
}

bool trieSearch(Trie* obj, char* word) {
    for (int i = 0; word[i]; i++) {
        int idx = word[i] - 'a';
        if (!obj->children[idx]) return false;
        obj = obj->children[idx];
    }
    return obj->isEnd;
}

bool trieStartsWith(Trie* obj, char* prefix) {
    for (int i = 0; prefix[i]; i++) {
        int idx = prefix[i] - 'a';
        if (!obj->children[idx]) return false;
        obj = obj->children[idx];
    }
    return true;
}

void trieFree(Trie* obj) {
    for (int i = 0; i < 26; i++) {
        if (obj->children[i]) trieFree(obj->children[i]);
    }
    free(obj);
}
