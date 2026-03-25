#include <pthread.h>

typedef struct {
    int n;
    pthread_mutex_t mutex;
    pthread_cond_t cond;
    int fooTurn;
} FooBar;

FooBar* fooBarCreate(int n) {
    FooBar* obj = malloc(sizeof(FooBar));
    obj->n = n;
    obj->fooTurn = 1;
    pthread_mutex_init(&obj->mutex, NULL);
    pthread_cond_init(&obj->cond, NULL);
    return obj;
}

void foo(FooBar* obj) {
    for (int i = 0; i < obj->n; i++) {
        pthread_mutex_lock(&obj->mutex);
        while (!obj->fooTurn) pthread_cond_wait(&obj->cond, &obj->mutex);
        printf("foo");
        obj->fooTurn = 0;
        pthread_cond_signal(&obj->cond);
        pthread_mutex_unlock(&obj->mutex);
    }
}

void bar(FooBar* obj) {
    for (int i = 0; i < obj->n; i++) {
        pthread_mutex_lock(&obj->mutex);
        while (obj->fooTurn) pthread_cond_wait(&obj->cond, &obj->mutex);
        printf("bar");
        obj->fooTurn = 1;
        pthread_cond_signal(&obj->cond);
        pthread_mutex_unlock(&obj->mutex);
    }
}

void fooBarFree(FooBar* obj) {
    pthread_mutex_destroy(&obj->mutex);
    pthread_cond_destroy(&obj->cond);
    free(obj);
}
