/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** insert(int** intervals, int intervalsSize, int* intervalsColSize,
             int* newInterval, int newIntervalSize,
             int* returnSize, int** returnColumnSizes) {
    int** result = (int**)malloc(sizeof(int*) * (intervalsSize + 1));
    *returnColumnSizes = (int*)malloc(sizeof(int) * (intervalsSize + 1));
    int idx = 0, i = 0;

    // 添加所有在 newInterval 左侧不重叠的区间
    while (i < intervalsSize && intervals[i][1] < newInterval[0]) {
        result[idx] = (int*)malloc(sizeof(int) * 2);
        result[idx][0] = intervals[i][0];
        result[idx][1] = intervals[i][1];
        (*returnColumnSizes)[idx] = 2;
        idx++;
        i++;
    }

    // 合并所有与 newInterval 重叠的区间
    while (i < intervalsSize && intervals[i][0] <= newInterval[1]) {
        if (intervals[i][0] < newInterval[0]) newInterval[0] = intervals[i][0];
        if (intervals[i][1] > newInterval[1]) newInterval[1] = intervals[i][1];
        i++;
    }
    result[idx] = (int*)malloc(sizeof(int) * 2);
    result[idx][0] = newInterval[0];
    result[idx][1] = newInterval[1];
    (*returnColumnSizes)[idx] = 2;
    idx++;

    // 添加所有在 newInterval 右侧不重叠的区间
    while (i < intervalsSize) {
        result[idx] = (int*)malloc(sizeof(int) * 2);
        result[idx][0] = intervals[i][0];
        result[idx][1] = intervals[i][1];
        (*returnColumnSizes)[idx] = 2;
        idx++;
        i++;
    }

    *returnSize = idx;
    return result;
}
