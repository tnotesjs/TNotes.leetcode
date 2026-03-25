#include <pthread.h>

typedef struct {
    int n;
    int state; // 0: zero, 1: odd, 2: even
    pthread_mutex_t mutex;
    pthread_cond_t cond;
} ZeroEvenOdd;

ZeroEvenOdd* zeroEvenOddCreate(int n) {
    ZeroEvenOdd* obj = malloc(sizeof(ZeroEvenOdd));
    obj->n = n;
    obj->state = 0;
    pthread_mutex_init(&obj->mutex, NULL);
    pthread_cond_init(&obj->cond, NULL);
    return obj;
}

void zero(ZeroEvenOdd* obj, void (*printNumber)(int)) {
    for (int i = 1; i <= obj->n; i++) {
        pthread_mutex_lock(&obj->mutex);
        while (obj->state != 0) pthread_cond_wait(&obj->cond, &obj->mutex);
        printNumber(0);
        obj->state = (i % 2 == 1) ? 1 : 2;
        pthread_cond_broadcast(&obj->cond);
        pthread_mutex_unlock(&obj->mutex);
    }
}

void odd(ZeroEvenOdd* obj, void (*printNumber)(int)) {
    for (int i = 1; i <= obj->n; i += 2) {
        pthread_mutex_lock(&obj->mutex);
        while (obj->state != 1) pthread_cond_wait(&obj->cond, &obj->mutex);
        printNumber(i);
        obj->state = 0;
        pthread_cond_broadcast(&obj->cond);
        pthread_mutex_unlock(&obj->mutex);
    }
}

void even(ZeroEvenOdd* obj, void (*printNumber)(int)) {
    for (int i = 2; i <= obj->n; i += 2) {
        pthread_mutex_lock(&obj->mutex);
        while (obj->state != 2) pthread_cond_wait(&obj->cond, &obj->mutex);
        printNumber(i);
        obj->state = 0;
        pthread_cond_broadcast(&obj->cond);
        pthread_mutex_unlock(&obj->mutex);
    }
}

void zeroEvenOddFree(ZeroEvenOdd* obj) {
    pthread_mutex_destroy(&obj->mutex);
    pthread_cond_destroy(&obj->cond);
    free(obj);
}
