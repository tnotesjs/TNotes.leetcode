class Solution:
    def discountPrices(self, sentence: str, discount: int) -> str:
        words = sentence.split()
        rate = 1 - discount / 100
        for i, w in enumerate(words):
            if w[0] == '$' and len(w) > 1 and w[1:].isdigit():
                price = int(w[1:]) * rate
                words[i] = f'${price:.2f}'
        return ' '.join(words)
