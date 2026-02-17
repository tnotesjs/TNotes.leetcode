char slowestKey(int* releaseTimes, int releaseTimesSize, char* keysPressed) {
    int bestDur = releaseTimes[0];
    char bestKey = keysPressed[0];
    
    for (int i = 1; i < releaseTimesSize; i++) {
        int dur = releaseTimes[i] - releaseTimes[i - 1];
        char key = keysPressed[i];
        
        if (dur > bestDur || (dur == bestDur && key > bestKey)) {
            bestDur = dur;
            bestKey = key;
        }
    }
    
    return bestKey;
}
