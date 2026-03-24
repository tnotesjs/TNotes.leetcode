char* predictPartyVictory(char* senate) {
    int n = strlen(senate);
    int* rq = (int*)malloc(sizeof(int) * n * 2);
    int* dq = (int*)malloc(sizeof(int) * n * 2);
    int rh = 0, rt = 0, dh = 0, dt = 0;
    for (int i = 0; i < n; i++) {
        if (senate[i] == 'R') rq[rt++] = i;
        else dq[dt++] = i;
    }
    while (rh < rt && dh < dt) {
        int r = rq[rh++], d = dq[dh++];
        if (r < d) rq[rt++] = r + n;
        else dq[dt++] = d + n;
    }
    free(rq); free(dq);
    return rh < rt ? "Radiant" : "Dire";
}
