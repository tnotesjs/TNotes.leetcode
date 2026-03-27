#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct TrieNode {
    struct TrieNode* children[10];
} TrieNode;

TrieNode* newNode() {
    TrieNode* n = (TrieNode*)calloc(1, sizeof(TrieNode));
    return n;
}

void insert(TrieNode* root, int num) {
    char buf[12];
    sprintf(buf, "%d", num);
    TrieNode* cur = root;
    for (int i = 0; buf[i]; i++) {
        int d = buf[i] - '0';
        if (!cur->children[d]) cur->children[d] = newNode();
        cur = cur->children[d];
    }
}

int search(TrieNode* root, int num) {
    char buf[12];
    sprintf(buf, "%d", num);
    TrieNode* cur = root;
    int len = 0;
    for (int i = 0; buf[i]; i++) {
        int d = buf[i] - '0';
        if (!cur->children[d]) break;
        cur = cur->children[d];
        len++;
    }
    return len;
}

int longestCommonPrefix(int* arr1, int arr1Size, int* arr2, int arr2Size) {
    TrieNode* root = newNode();
    for (int i = 0; i < arr1Size; i++) insert(root, arr1[i]);
    int ans = 0;
    for (int i = 0; i < arr2Size; i++) {
        int len = search(root, arr2[i]);
        if (len > ans) ans = len;
    }
    return ans;
}
