/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** answers;
int answerSize;
int limitN;
int targetK;
int path[20];
int pathSize;

int getCombinationCount(int n, int k) {
	if (k > n - k) k = n - k;
	long long count = 1;
	for (int i = 1; i <= k; i++) {
		count = count * (n - k + i) / i;
	}
	return (int)count;
}

void backtrack(int start, int* returnColumnSizes) {
	if (pathSize == targetK) {
		int* combination = (int*)malloc(targetK * sizeof(int));
		for (int i = 0; i < targetK; i++) combination[i] = path[i];
		answers[answerSize] = combination;
		returnColumnSizes[answerSize] = targetK;
		answerSize++;
		return;
	}

	for (int num = start; num <= limitN - (targetK - pathSize) + 1; num++) {
		path[pathSize++] = num;
		backtrack(num + 1, returnColumnSizes);
		pathSize--;
	}
}

int** combine(int n, int k, int* returnSize, int** returnColumnSizes) {
	int total = getCombinationCount(n, k);
	answers = (int**)malloc(total * sizeof(int*));
	*returnColumnSizes = (int*)malloc(total * sizeof(int));
	answerSize = 0;
	limitN = n;
	targetK = k;
	pathSize = 0;

	backtrack(1, *returnColumnSizes);

	*returnSize = answerSize;
	return answers;
}
