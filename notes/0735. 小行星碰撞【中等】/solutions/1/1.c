int* asteroidCollision(int* asteroids, int asteroidsSize, int* returnSize) {
    int* stack = (int*)malloc(sizeof(int) * asteroidsSize);
    int top = 0;
    for (int i = 0; i < asteroidsSize; i++) {
        int a = asteroids[i];
        int alive = 1;
        while (alive && a < 0 && top > 0 && stack[top - 1] > 0) {
            if (stack[top - 1] < -a) top--;
            else if (stack[top - 1] == -a) { top--; alive = 0; }
            else alive = 0;
        }
        if (alive) stack[top++] = a;
    }
    *returnSize = top;
    return stack;
}
