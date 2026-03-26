class Solution:
    def largestWordCount(self, messages: list[str], senders: list[str]) -> str:
        count: dict[str, int] = {}
        for msg, sender in zip(messages, senders):
            count[sender] = count.get(sender, 0) + len(msg.split())
        return max(count, key=lambda s: (count[s], s))
