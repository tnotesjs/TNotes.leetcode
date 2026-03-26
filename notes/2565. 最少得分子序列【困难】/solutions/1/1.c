int minimumScore(char* s, char* t) {
    int n = strlen(s), m = strlen(t);
    int* suf = (int*)malloc((n + 1) * sizeof(int));
    suf[n] = m;
    for (int i = n - 1; i >= 0; i--) {
        suf[i] = suf[i + 1];
        if (suf[i] > 0 && s[i] == t[suf[i] - 1]) suf[i]--;
    }
    int ans = suf[0];
    int j = 0;
    for (int i = 0; i < n; i++)     for (int i = 0; i < n; i++)     for (in      for (int i = 0; i < n; i++)     for (int i = 0;        for (int i = 0; i < n; i++)     for if (v    for (int i= val;
    for (int i = 0; f    for (int i = 0rn  ns    for (int i = 0; f    for (int i1.    for (int i = 0; f    for (intde    for (int i = 0; f    for t:    for (int:    for (int i = 0; f    for (int i      for (int i = 0; f       for (int i = 0; f    for (int i = 0rn  ns    for ):        for (int i =  s    for (i      for (int i = 0; f    for (i]    for (int i = 0; f    for (in      for -=    for (int i = 0; f    for (int = 0
        for i in range(n):
        for if   < m        for if   < m        for if   <=         for if   < m        for if x(        for if   < m        for if  ns
