/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** answers;
int answerSize;
int numsLength;
int path[6];
bool used[6];

void backtrack(int* nums, int depth, int* returnColumnSizes) {
	if (depth == numsLength) {
		int* permutation = (int*)malloc(numsLength * sizeof(int));
		memcpy(permutation, path, numsLength * sizeof(int));
		returnColumnSizes[answerSize] = numsLength;
		answers[answerSize++] = permutation;
		return;
	}

	for (int i = 0; i < numsLength; i++) {
		if (used[i]) continue;

		path[depth] = nums[i];
		used[i] = true;
		backtrack(nums, depth + 1, returnColumnSizes);
		used[i] = false;
	}
}

int** permute(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
	numsLength = numsSize;
	answerSize = 0;
	int total = 1;
	for (int i = 1; i <= numsLength; i++) total *= i;

	answers = (int**)malloc(total * sizeof(int*));
	*returnColumnSizes = (int*)malloc(total * sizeof(int));
	memset(used, 0, sizeof(used));

	backtrack(nums, 0, *returnColumnSizes);

	*returnSize = answerSize;
	return answers;
}
