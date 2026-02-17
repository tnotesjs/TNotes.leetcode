class Solution:
    def slowestKey(self, releaseTimes: List[int], keysPressed: str) -> str:
        bestDur = releaseTimes[0]
        bestKey = keysPressed[0]
        
        for i in range(1, len(releaseTimes)):
            dur = releaseTimes[i] - releaseTimes[i - 1]
            key = keysPressed[i]
            
            if dur > bestDur or (dur == bestDur and key > bestKey):
                bestDur = dur
                bestKey = key
        
        return bestKey