typedef struct {
    char** words;
    int size;
} MagicDictionary;

MagicDictionary* magicDictionaryCreate() {
    MagicDictionary* obj = (MagicDictionary*)malloc(sizeof(MagicDictionary));
    obj->words = NULL;
    obj->size = 0;
    return obj;
}

void magicDictionaryBuildDict(MagicDictionary* obj, char** dictionary, int dictionarySize) {
    obj->words = dictionary;
    obj->size = dictionarySize;
}

bool magicDictionarySearch(MagicDictionary* obj, char* searchWord) {
    int sLen = strlen(searchWord);
    for (int i = 0; i < obj->size; i++) {
        if ((int)strlen(obj->words[i]) != sLen) continue;
        int diff = 0;
        for (int j = 0; j < sLen; j++) {
            if (obj->words[i][j] != searchWord[j]) diff++;
            if (diff > 1) break;
        }
        if (diff == 1) return true;
    }
    return false;
}

void magicDictionaryFree(MagicDictionary* obj) {
    free(obj);
}
