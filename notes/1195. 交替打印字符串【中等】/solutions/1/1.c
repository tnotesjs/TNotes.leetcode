typedef struct {
    int n;
    int current;
    pthread_mutex_t mutex;
    pthread_cond_t cond;
} FizzBuzz;

FizzBuzz* fizzBuzzCreate(int n) {
    FizzBuzz* obj = (FizzBuzz*)malloc(sizeof(FizzBuzz));
    obj->n = n;
    obj->current = 1;
    pthread_mutex_init(&obj->mutex, NULL);
    pthread_cond_init(&obj->cond, NULL);
    return obj;
}

void fizz(FizzBuzz* obj) {
    while (1) {
        pthread_mutex_lock(&obj->mutex);
        while (obj->current <= obj->n && !(obj->current % 3 == 0 && obj->current % 5 != 0))
            pthread_cond_wait(&obj->cond, &obj->mutex);
        if (obj->current > obj->n) { pthread_mutex_unlock(&obj->mutex); return; }
        printFizz();
        obj->current++;
        pthread_cond_broadcast(&obj->cond);
        pthread_mutex_unlock(&obj->mutex);
    }
}

void buzz(FizzBuzz* obj) {
    while (1) {
        pthread_mutex_lock(&obj->mutex);
        while (obj->current <= obj->n && !(obj->current % 5 == 0 && obj->current % 3 != 0))
            pthread_cond_wait(&obj->cond, &obj->mutex);
        if (obj->current > obj->n) { pthread_mutex_unlock(&obj->mutex); return; }
        printBuzz();
        obj->current++;
        pthread_cond_broadcast(&obj->cond);
        pthread_mutex_unlock(&obj->mutex);
    }
}

void fizzbuzz(FizzBuzz* obj) {
    while (1) {
        pthread_mutex_lock(&obj->mutex);
        while (obj->current <= obj->n && !(obj->current % 15 == 0))
            pthread_cond_wait(&obj->cond, &obj->mutex);
        if (obj->current > obj->n) { pthread_mutex_unlock(&obj->mutex); return; }
        printFizzBuzz();
        obj->current++;
        pthread_cond_broadcast(&obj->cond);
        pthread_mutex_unlock(&obj->mutex);
    }
}

void number(FizzBuzz* obj) {
    while (1) {
        pthread_mutex_lock(&obj->mutex);
        while (obj->current <= obj->n && !(obj->current % 3 != 0 && obj->current % 5 != 0))
            pthread_cond_wait(&obj->cond, &obj->mutex);
        if (obj->current > obj->n) { pthread_mutex_unlock(&obj->mutex); return; }
        printNumber(obj->current);
        obj->current++;
        pthread_cond_broadcast(&obj->cond);
        pthread_mutex_unlock(&obj->mutex);
    }
}
