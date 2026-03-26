#define HIGH_BIT 19
#define MAXNODES 1100000

int ch[MAXNODES][2];
int cnt_arr[MAXNODES];
int sz;

void trieAdd(int val) {
    int cur = 0;
    for (int i = HIGH_BIT; i >= 0; i--) {
        int bit = (val >> i) & 1;
        if (!ch[cur][bit]) {
            ch[cur][bit] = sz;
            ch[sz][0] = ch[sz][1] = 0;
            cnt_arr[sz] = 0;
            sz++;
        }
        cur = ch[cur][bit];
        cnt_arr[cur]++;
    }
}

void trieRemove(int val) {
    int cur = 0;
    for (int i = HIGH_BIT; i >= 0; i--) {
        cur = ch[cur][(val >> i) & 1];
        cnt_arr[cur]--;
    }
}

int trieMaxXor(int val) {
    int cur = 0, res = 0;
    for (int i = HIGH_BIT; i >= 0; i--) {
        int bit = (val >> i) & 1;
        int want = 1 - bit;
        if (ch[cur][want] && cnt_arr[ch[cur][want]] > 0) {
            res |= (1 << i);
            cur = ch[cur][want];
        } else {
            cur = ch[cur][bit];
        }
    }
    return res;
}

int cmpInt(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

int maximumStrongPairXor(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmpInt);
    sz = 1;
    ch[0][0] = ch[0][1] = 0;
    cnt_arr[0] = 0;
    int ans = 0, left = 0;
    for (int right = 0; right < numsSize; right++) {
        trieAdd(nums[right]);
        while (nums[right] > 2 * nums[left]) {
            trieRemove(nums[left]);
            left++;
        }
        int x = trieMaxXor(nums[right]);
        if (x > ans) ans = x;
    }
    return ans;
}
