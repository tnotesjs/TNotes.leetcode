from collections import deque

class Solution:
    def deckRevealedIncreasing(self, deck: list[int]) -> list[int]:
        deck.sort()
        n = len(deck)
        result = [0] * n
        queue = deque(range(n))

        for card in deck:
            result[queue.popleft()] = card
            if queue:
                queue.append(queue.popleft())

        return result
