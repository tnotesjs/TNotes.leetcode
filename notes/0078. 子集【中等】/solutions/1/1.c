/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** subsets(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
	int total = 1 << numsSize;
	int** ans = (int**)malloc(total * sizeof(int*));
	*returnColumnSizes = (int*)malloc(total * sizeof(int));

	ans[0] = (int*)malloc(0);
	(*returnColumnSizes)[0] = 0;
	int ansSize = 1;

	for (int i = 0; i < numsSize; i++) {
		int currentSize = ansSize;
		for (int j = 0; j < currentSize; j++) {
			int subsetSize = (*returnColumnSizes)[j];
			int* subset = (int*)malloc((subsetSize + 1) * sizeof(int));
			for (int k = 0; k < subsetSize; k++) subset[k] = ans[j][k];
			subset[subsetSize] = nums[i];

			ans[ansSize] = subset;
			(*returnColumnSizes)[ansSize] = subsetSize + 1;
			ansSize++;
		}
	}

	*returnSize = ansSize;
	return ans;
}
