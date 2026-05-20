/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int compareIntervals(const void* a, const void* b) {
	int* intervalA = *(int**)a;
	int* intervalB = *(int**)b;
	if (intervalA[0] != intervalB[0]) {
		return intervalA[0] - intervalB[0];
	}
	return intervalA[1] - intervalB[1];
}

int** merge(int** intervals, int intervalsSize, int* intervalsColSize,
			int* returnSize, int** returnColumnSizes) {
	qsort(intervals, intervalsSize, sizeof(int*), compareIntervals);

	int** result = (int**)malloc(sizeof(int*) * intervalsSize);
	*returnColumnSizes = (int*)malloc(sizeof(int) * intervalsSize);

	int currentStart = intervals[0][0];
	int currentEnd = intervals[0][1];
	int count = 0;

	for (int i = 1; i < intervalsSize; i++) {
		if (intervals[i][0] <= currentEnd) {
			if (intervals[i][1] > currentEnd) {
				currentEnd = intervals[i][1];
			}
		} else {
			result[count] = (int*)malloc(sizeof(int) * 2);
			result[count][0] = currentStart;
			result[count][1] = currentEnd;
			(*returnColumnSizes)[count] = 2;
			count++;

			currentStart = intervals[i][0];
			currentEnd = intervals[i][1];
		}
	}

	result[count] = (int*)malloc(sizeof(int) * 2);
	result[count][0] = currentStart;
	result[count][1] = currentEnd;
	(*returnColumnSizes)[count] = 2;
	count++;

	*returnSize = count;
	return result;
}
