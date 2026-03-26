class Solution:
    def asteroidsDestroyed(self, mass: int, asteroids: List[int]) -> bool:
        asteroids.sort()
        m = mass
        for a in asteroids:
            if m < a:
                return False
            m += a
        return True
