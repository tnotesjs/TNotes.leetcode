#define MAX_URLS 100000
char* urls[MAX_URLS];
int urlCount = 0;

char* encode(char* longUrl) {
    urls[urlCount] = longUrl;
    char* shortUrl = (char*)malloc(64);
    sprintf(shortUrl, "http://tinyurl.com/%d", urlCount);
    urlCount++;
    return shortUrl;
}

char* decode(char* shortUrl) {
    int id;
    sscanf(shortUrl, "http://tinyurl.com/%d", &id);
    return urls[id];
}
