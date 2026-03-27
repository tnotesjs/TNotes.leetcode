#include <string.h>
#include <stdlib.h>

typedef struct TrieNode2 {
    struct TrieNode2* children[676];
    long long cnt;
} TrieNode2;

TrieNode2* newNode2() {
    TrieNode2* n = (TrieNode2*)calloc(1, sizeof(TrieNode2));
    return n;
}

long long countPrefixSuffixPairs(char** words, int wordsSize) {
    TrieNode2* root = newNode2();
    long long ans = 0;
    for (int w = 0; w < wordsSize; w++) {
        int n = strlen(words[w]);
        TrieNode2* node = root;
        for (int i = 0; i < n; i++) {
            int key = (words[w][i] - 'a') * 26 + (words[w][n - 1 - i] - 'a');
            if (!node->children[key]) node->children[key] = newNode2();
            node = node->children[key];
            ans += node->cnt;
        }
        node->cnt++;
    }
    return ans;
}
