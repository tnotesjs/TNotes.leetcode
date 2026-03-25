class Solution:
    def prisonAfterNDays(self, cells: list[int], n: int) -> list[int]:
        def next_state(state):
            return [0] + [int(state[i - 1] == state[i + 1]) for i in range(1, 7)] + [0]

        seen = {}
        state = cells
        for day in range(n):
            key = tuple(state)
            if key in seen:
                cycle_len = day - seen[key]
                remaining = (n - day) % cycle_len
                for _ in range(remaining):
                    state = next_state(state)
                return state
            seen[key] = day
            state = next_state(state)

        return state
