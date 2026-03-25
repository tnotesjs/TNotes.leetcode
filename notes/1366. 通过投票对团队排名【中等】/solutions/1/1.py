class Solution:
    def rankTeams(self, votes: list[str]) -> str:
        teams = len(votes[0])
        count = {ch: [0] * teams for ch in votes[0]}
        for vote in votes:
            for i, ch in enumerate(vote):
                count[ch][i] += 1
        return ''.join(sorted(votes[0], key=lambda ch: ([-c for c in count[ch]], ch)))
