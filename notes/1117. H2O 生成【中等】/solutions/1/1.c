#include <pthread.h>

typedef struct {
    int hCount;
    int oCount;
    pthread_mutex_t mutex;
    pthread_cond_t cond;
} H2O;

H2O* h2oCreate() {
    H2O* obj = malloc(sizeof(H2O));
    obj->hCount = 0;
    obj->oCount = 0;
    pthread_mutex_init(&obj->mutex, NULL);
    pthread_cond_init(&obj->cond, NULL);
    return obj;
}

void hydrogen(H2O* obj) {
    pthread_mutex_lock(&obj->mutex);
    while (obj->hCount >= 2) pthread_cond_wait(&obj->cond, &obj->mutex);
    obj->hCount++;
    printf("H");
    if (obj->hCount == 2 && obj->oCount == 1) {
        obj->hCount = 0;
        obj->oCount = 0;
        pthread_cond_broadcast(&obj->cond);
    }
    pthread_mutex_unlock(&obj->mutex);
}

void oxygen(H2O* obj) {
    pthread_mutex_lock(&obj->mutex);
    while (obj->oCount >= 1) pthread_cond_wait(&obj->cond, &obj->mutex);
    obj->oCount++;
    printf("O");
    if (obj->hCount == 2 && obj->oCount == 1) {
        obj->hCount = 0;
        obj->oCount = 0;
        pthread_cond_broadcast(&obj->cond);
    }
    pthread_mutex_unlock(&obj->mutex);
}

void h2oFree(H2O* obj) {
    pthread_mutex_destroy(&obj->mutex);
    pthread_cond_destroy(&obj->cond);
    free(obj);
}
