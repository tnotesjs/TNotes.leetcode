class Solution:
    def matchPlayersAndTrainers(self, players: list[int], trainers: list[int]) -> int:
        players.sort()
        trainers.sort()
        i = j = count = 0
        while i < len(players) and j < len(trainers):
            if players[i] <= trainers[j]:
                count += 1
                i += 1
            j += 1
        return count
