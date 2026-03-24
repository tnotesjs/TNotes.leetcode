class Codec:
    def __init__(self):
        self.map = {}
        self.id = 0

    def encode(self, longUrl: str) -> str:
        self.id += 1
        shortUrl = f'http://tinyurl.com/{self.id}'
        self.map[shortUrl] = longUrl
        return shortUrl

    def decode(self, shortUrl: str) -> str:
        return self.map[shortUrl]
