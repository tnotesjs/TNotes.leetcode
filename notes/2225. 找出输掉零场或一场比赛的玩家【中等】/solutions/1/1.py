class Solution:
    def findWinners(self, matches: list[list[int]]) -> list[list[int]]:
        losses = {}
        for winner, loser in matches:
            if winner not in losses:
                losses[winner] = 0
            losses[loser] = losses.get(loser, 0) + 1
        no_loss = sorted(p for p, cnt in losses.items() if cnt == 0)
        one_loss = sorted(p for p, cnt in losses.items() if cnt == 1)
        return [no_loss, one_loss]
