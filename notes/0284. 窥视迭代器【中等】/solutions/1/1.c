struct PeekingIterator {
    struct Iterator* iterator;
    int peeked;
    bool hasPeeked;
};

struct PeekingIterator* Constructor(struct Iterator* iter) {
    struct PeekingIterator* pIter = (struct PeekingIterator*)malloc(sizeof(struct PeekingIterator));
    pIter->iterator = iter;
    pIter->hasPeeked = false;
    return pIter;
}

int peek(struct PeekingIterator* obj) {
    if (!obj->hasPeeked) {
        obj->peeked = Iterator_next(obj->iterator);
        obj->hasPeeked = true;
    }
    return obj->peeked;
}

int next(struct PeekingIterator* obj) {
    if (obj->hasPeeked) {
        obj->hasPeeked = false;
        return obj->peeked;
    }
    return Iterator_next(obj->iterator);
}

bool hasNext(struct PeekingIterator* obj) {
    return obj->hasPeeked || Iterator_hasNext(obj->iterator);
}
