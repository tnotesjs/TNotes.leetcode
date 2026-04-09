void expand(char* s, int n, int left, int right, int* cuts) {
	while (left >= 0 && right < n && s[left] == s[right]) {
		int newCut = left == 0 ? 0 : cuts[left - 1] + 1;
		if (newCut < cuts[right]) cuts[right] = newCut;
		left--;
		right++;
	}
}

int minCut(char* s) {
	int n = strlen(s);
	int* cuts = (int*)malloc(sizeof(int) * n);

	for (int i = 0; i < n; i++) cuts[i] = i;

	for (int center = 0; center < n; center++) {
		expand(s, n, center, center, cuts);
		expand(s, n, center, center + 1, cuts);
	}

	int answer = cuts[n - 1];
	free(cuts);
	return answer;
}
