int wateringPlants(int* plants, int plantsSize, int capacity) {
    int steps = 0, water = capacity;
    for (int i = 0; i < plantsSize; i++) {
        if (water >= plants[i]) {
            water -= plants[i];
            steps++;
        } else {
            steps += 2 * i + 1;
            water = capacity - plants[i];
        }
    }
    return steps;
}
