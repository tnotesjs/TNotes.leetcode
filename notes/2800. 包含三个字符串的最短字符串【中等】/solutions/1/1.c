char* mergeTwo(const char* s, const char* t) {
  int sn = strlen(s), tn = strlen(t);
  if (strstr(s, t)) {
    char* res = (char*)malloc(sn + 1);
    strcpy(res, s);
    return res;
  }
  int maxOv = sn < tn ? sn : tn;
  for (int i = maxOv; i >= 0; i--) {
    if (strncmp(s + sn - i, t, i) == 0) {
      char* res = (char*)malloc(sn + tn - i + 1);
      memcpy(res, s, sn);
      strcpy(res + sn, t + i);
      return res;
    }
  }
  return NULL;
}

char* minimumString(char* a, char* b, char* c) {
  char* strs[3] = {a, b, c};
  int perms[6][3] = {{0,1,2},{0,2,1},{1,0,2},{1,2,0},{2,0,1},{2,1,0}};
  char* best = NULL;
  for (int p = 0; p < 6; p++) {
    char* tmp = mergeTwo(strs[perms[p][0]], strs[perms[p][1]]);
    char* res = mergeTwo(tmp, strs[perms[p][2]]);
    free(tmp);
    if (!best || strlen(res) < strlen(best) ||
        (strlen(res) == strlen(best) && strcmp(res, best) < 0)) {
      free(best);
      best = res;
    } else {
      free(res);
    }
  }
  return best;
}
