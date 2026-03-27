#include <stdlib.h>
#include <math.h>

int** resultGrid(int** image, int imageSize, int* imageColSize, int threshold, int* returnSize, int** returnColumnSizes) {
    int m = imageSize, n = imageColSize[0];
    int** sumG = (int**)malloc(m * sizeof(int*));
    int** cntG = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        sumG[i] = (int*)calloc(n, sizeof(int));
        cntG[i] = (int*)calloc(n, sizeof(int));
    }
    for (int i = 0; i <= m - 3; i++) {
        for (int j = 0; j <= n - 3; j++) {
            int valid = 1, total = 0;
            for (int r = i; r < i + 3 && valid; r++) {
                for (int c = j; c < j + 3 && valid; c++) {
                    total += image[r][c];
                    if (r > i && abs(image[r][c] - image[r-1][c]) > threshold) valid = 0;
                    if (c > j && abs(image[r][c] - image[r][c-1]) > threshold) valid = 0;
                }
            }
            if (valid) {
                int avg = total / 9;
                for (int r = i; r < i + 3; r++)
                    for (int c = j; c < j + 3; c++) {
                        sumG[r][c] += avg;
                        cntG[r][c]++;
                    }
            }
        }
    }
    *returnSize = m;
    *returnColumnSizes = (int*)malloc(m * sizeof(int));
    int** res = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        (*returnColumnSizes)[i] = n;
        res[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            res[i][j] = cntG[i][j] > 0 ? sumG[i][j] / cntG[i][j] : image[i][j];
        }
        free(sumG[i]); free(cntG[i]);
    }
    free(sumG); free(cntG);
    return res;
}
