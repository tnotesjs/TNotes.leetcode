class Solution:
    def reorderLogFiles(self, logs: list[str]) -> list[str]:
        letter_logs = []
        digit_logs = []

        for log in logs:
            idx = log.index(' ')
            if log[idx + 1].isdigit():
                digit_logs.append(log)
            else:
                letter_logs.append(log)

        letter_logs.sort(key=lambda log: (log.split(' ', 1)[1], log.split(' ', 1)[0]))

        return letter_logs + digit_logs
