// 简化实现：使用数组存储推文和关注关系
#define MAX_TWEETS 10000
#define MAX_FOLLOWS 1000

typedef struct {
    int users[MAX_TWEETS];
    int tweets[MAX_TWEETS];
    int tweetCount;
    int followers[MAX_FOLLOWS];
    int followees[MAX_FOLLOWS];
    int followCount;
} Twitter;

Twitter* twitterCreate() {
    Twitter* obj = (Twitter*)calloc(1, sizeof(Twitter));
    return obj;
}

void twitterPostTweet(Twitter* obj, int userId, int tweetId) {
    obj->users[obj->tweetCount] = userId;
    obj->tweets[obj->tweetCount] = tweetId;
    obj->tweetCount++;
}

int* twitterGetNewsFeed(Twitter* obj, int userId, int* returnSize) {
    int* res = (int*)malloc(sizeof(int) * 10);
    *returnSize = 0;
    for (int i = obj->tweetCount - 1; i >= 0 && *returnSize < 10; i--) {
        if (obj->users[i] == userId) {
            res[(*returnSize)++] = obj->tweets[i];
            continue;
        }
        for (int j = 0; j < obj->followCount; j++) {
            if (obj->followers[j] == userId && obj->followees[j] == obj->users[i]) {
                res[(*returnSize)++] = obj->tweets[i];
                break;
            }
        }
    }
    return res;
}

void twitterFollow(Twitter* obj, int followerId, int followeeId) {
    for (int i = 0; i < obj->followCount; i++) {
        if (obj->followers[i] == followerId && obj->followees[i] == followeeId) return;
    }
    obj->followers[obj->followCount] = followerId;
    obj->followees[obj->followCount] = followeeId;
    obj->followCount++;
}

void twitterUnfollow(Twitter* obj, int followerId, int followeeId) {
    for (int i = 0; i < obj->followCount; i++) {
        if (obj->followers[i] == followerId && obj->followees[i] == followeeId) {
            obj->followers[i] = obj->followers[obj->followCount - 1];
            obj->followees[i] = obj->followees[obj->followCount - 1];
            obj->followCount--;
            return;
        }
    }
}

void twitterFree(Twitter* obj) { free(obj); }
