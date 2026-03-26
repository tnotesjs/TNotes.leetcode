class Solution:
    def topStudents(self, positive_feedback: list[str], negative_feedback: list[str], report: list[str], student_id: list[int], k: int) -> list[int]:
        pos = set(positive_feedback)
        neg = set(negative_feedback)
        scores = []
        for i, sid in enumerate(student_id):
            score = 0
            for word in report[i].split():
                if word in pos:
                    score += 3
                elif word in neg:
                    score -= 1
            scores.append((-score, sid))
        scores.sort()
        return [s[1] for s in scores[:k]]
