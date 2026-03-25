#include <stdlib.h>
#include <string.h>

#define MAX_TOKENS_1797 2001

typedef struct {
  char id[11];
  int expire;
} Token1797;

typedef struct {
  int ttl;
  Token1797 tokens[MAX_TOKENS_1797];
  int size;
} AuthenticationManager;

AuthenticationManager* authenticationManagerCreate(int timeToLive) {
  AuthenticationManager* obj = (AuthenticationManager*)calloc(1, sizeof(AuthenticationManager));
  obj->ttl = timeToLive;
  return obj;
}

void authenticationManagerGenerate(AuthenticationManager* obj, char* tokenId, int currentTime) {
  strcpy(obj->tokens[obj->size].id, tokenId);
  obj->tokens[obj->size].expire = currentTime + obj->ttl;
  obj->size++;
}

void authenticationManagerRenew(AuthenticationManager* obj, char* tokenId, int currentTime) {
  for (int i = 0; i < obj->size; i++) {
    if (strcmp(obj->tokens[i].id, tokenId) == 0 && obj->tokens[i].expire > currentTime) {
      obj->tokens[i].expire = currentTime + obj->ttl;
      return;
    }
  }
}

int authenticationManagerCountUnexpiredTokens(AuthenticationManager* obj, int currentTime) {
  int count = 0;
  for (int i = 0; i < obj->size; i++) {
    if (obj->tokens[i].expire > currentTime) count++;
  }
  return count;
}

void authenticationManagerFree(AuthenticationManager* obj) {
  free(obj);
}
