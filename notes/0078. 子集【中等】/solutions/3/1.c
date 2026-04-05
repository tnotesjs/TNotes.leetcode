/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** answers;
int answerSize;
int numsLength;
int path[10];
int pathSize;

void storeSubset(int* returnColumnSizes) {
	int* subset = (int*)malloc(pathSize * sizeof(int));
	for (int i = 0; i < pathSize; i++) subset[i] = path[i];
	answers[answerSize] = subset;
	returnColumnSizes[answerSize] = pathSize;
	answerSize++;
}

void backtrack(int* nums, int start, int* returnColumnSizes) {
	storeSubset(returnColumnSizes);

	for (int i = start; i < numsLength; i++) {
		path[pathSize++] = nums[i];
		backtrack(nums, i + 1, returnColumnSizes);
		pathSize--;
	}
}

int** subsets(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
	int total = 1 << numsSize;
	answers = (int**)malloc(total * sizeof(int*));
	*returnColumnSizes = (int*)malloc(total * sizeof(int));
	answerSize = 0;
	numsLength = numsSize;
	pathSize = 0;

	backtrack(nums, 0, *returnColumnSizes);

	*returnSize = answerSize;
	return answers;
}
