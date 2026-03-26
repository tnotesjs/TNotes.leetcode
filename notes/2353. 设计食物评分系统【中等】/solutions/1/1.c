typedef struct {
    char** foods;
    char** cuisines;
    int* ratings;
    int size;
} FoodRatings;

FoodRatings* foodRatingsCreate(char** foods, int foodsSize, char** cuisines, int cuisinesSize, int* ratings, int ratingsSize) {
    FoodRatings* obj = (FoodRatings*)malloc(sizeof(FoodRatings));
    obj->size = foodsSize;
    obj->foods = (char**)malloc(foodsSize * sizeof(char*));
    obj->cuisines = (char**)malloc(foodsSize * sizeof(char*));
    obj->ratings = (int*)malloc(foodsSize * sizeof(int));
    for (int i = 0; i < foodsSize; i++) {
        obj->foods[i] = foods[i];
        obj->cuisines[i] = cuisines[i];
        obj->ratings[i] = ratings[i];
    }
    return obj;
}

void foodRatingsChangeRating(FoodRatings* obj, char* food, int newRating) {
    for (int i = 0; i < obj->size; i++) {
        if (strcmp(obj->foods[i], food) == 0) {
            obj->ratings[i] = newRating;
            return;
        }
    }
}

char* foodRatingsHighestRated(FoodRatings* obj, char* cuisine) {
    int bestRating = -1;
    char* bestFood = NULL;
    for (int i = 0; i < obj->size; i++) {
        if (strcmp(obj->cuisines[i], cuisine) == 0) {
            if (obj->ratings[i] > bestRating ||
                (obj->ratings[i] == bestRating && strcmp(obj->foods[i], bestFood) < 0)) {
                bestRating = obj->ratings[i];
                bestFood = obj->foods[i];
            }
        }
    }
    return bestFood;
}

void foodRatingsFree(FoodRatings* obj) {
    free(obj->foods);
    free(obj->cuisines);
    free(obj->ratings);
    free(obj);
}
