class BrowserHistory:
    def __init__(self, homepage: str) -> None:
        self.history: list[str] = [homepage]
        self.cur: int = 0

    def visit(self, url: str) -> None:
        self.cur += 1
        self.history = self.history[:self.cur]
        self.history.append(url)

    def back(self, steps: int) -> str:
        self.cur = max(0, self.cur - steps)
        return self.history[self.cur]

    def forward(self, steps: int) -> str:
        self.cur = min(len(self.history) - 1, self.cur + steps)
        return self.history[self.cur]
