typedef struct {
    int rem[4]; // 索引0不使用，1=big, 2=medium, 3=small
} ParkingSystem;

ParkingSystem* parkingSystemCreate(int big, int medium, int small) {
    ParkingSystem* obj = (ParkingSystem*)malloc(sizeof(ParkingSystem));
    obj->rem[0] = 0;
    obj->rem[1] = big;
    obj->rem[2] = medium;
    obj->rem[3] = small;
    return obj;
}

bool parkingSystemAddCar(ParkingSystem* obj, int carType) {
    if (obj->rem[carType] > 0) {
        obj->rem[carType]--;
        return true;
    }
    return false;
}

void parkingSystemFree(ParkingSystem* obj) {
    free(obj);
}

/**
 * Your ParkingSystem struct will be instantiated and called as such:
 * ParkingSystem* obj = parkingSystemCreate(big, medium, small);
 * bool param_1 = parkingSystemAddCar(obj, carType);
 * parkingSystemFree(obj);
 */
