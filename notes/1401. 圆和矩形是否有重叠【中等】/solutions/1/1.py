class Solution:
    def checkOverlap(self, radius: int, xCenter: int, yCenter: int, x1: int, y1: int, x2: int, y2: int) -> bool:
        cx = max(x1, min(xCenter, x2))
        cy = max(y1, min(yCenter, y2))
        dx, dy = xCenter - cx, yCenter - cy
        return dx * dx + dy * dy <= radius * radius
