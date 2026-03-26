class Solution:
    def bestClosingTime(self, customers: str) -> int:
        total_y = customers.count('Y')
        penalty = total_y
        min_penalty = penalty
        best_time = 0
        for i, c in enumerate(customers):
            if c == 'Y':
                penalty -= 1
            else:
                penalty += 1
            if penalty < min_penalty:
                min_penalty = penalty
                best_time = i + 1
        return best_time
