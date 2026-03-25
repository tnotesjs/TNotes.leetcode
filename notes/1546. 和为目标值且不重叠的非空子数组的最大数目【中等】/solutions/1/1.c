#define MAP_SZ 200003
typedef struct HN { long long key; struct HN* next; } HN;

static HN* htbl[MAP_SZ];
static void hClear() { for (int i = 0; i < MAP_SZ; i++) { HN* p = htbl[i]; while(p) { HN* t=p; p=p->next; free(t); } htbl[i]=NULL; } }
static unsigned hf(long long k) { return ((unsigned long long)k * 2654435761ULL) % MAP_SZ; }
static int hHas(long long k) { for (HN* p = htbl[hf(k)]; p; p=p->next) if(p->key==k) return 1; return 0; }
static void hAdd(long long k) { if(hHas(k)) return; unsigned h=hf(k); HN* p=(HN*)malloc(sizeof(HN)); p->key=k; p->next=htbl[h]; htbl[h]=p; }

int maxNonOverlapping(int* nums, int numsSize, int target) {
    hClear();
    hAdd(0);
    long long sum = 0;
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        sum += nums[i];
        if (hHas(sum - target)) {
            count++;
            hClear();
            hAdd(sum);
        } else {
            hAdd(sum);
        }
    }
    return count;
}
