/**
 * Return an array of arrays of strings.
 * The sizes of these arrays are returned as *returnSize and **returnColumnSizes respectively.
 */
bool dp[16][16];
int pathStarts[16];
int pathLens[16];
int totalRows;
int totalCells;
int totalChars;
int rowIndex;
int cellIndex;
int charIndex;
char* source;
int sourceLen;
char*** answers;
int* columnSizes;
char** cellPool;
char* charPool;

void countPartitions(int start, int depth, int charsUsed) {
    if (start == sourceLen) {
        totalRows++;
        totalCells += depth;
        totalChars += charsUsed;
        return;
    }

    for (int end = start; end < sourceLen; end++) {
        if (!dp[start][end]) continue;
        countPartitions(end + 1, depth + 1, charsUsed + (end - start + 2));
    }
}

void buildPartitions(int start, int depth) {
    if (start == sourceLen) {
        answers[rowIndex] = cellPool + cellIndex;
        columnSizes[rowIndex] = depth;

        for (int i = 0; i < depth; i++) {
            int len = pathLens[i];
            answers[rowIndex][i] = charPool + charIndex;
            memcpy(charPool + charIndex, source + pathStarts[i], len);
            charIndex += len;
            charPool[charIndex++] = '\0';
        }

        cellIndex += depth;
        rowIndex++;
        return;
    }

    for (int end = start; end < sourceLen; end++) {
        if (!dp[start][end]) continue;
        pathStarts[depth] = start;
        pathLens[depth] = end - start + 1;
        buildPartitions(end + 1, depth + 1);
    }
}

char*** partition(char* s, int* returnSize, int** returnColumnSizes) {
    source = s;
    sourceLen = strlen(s);

    for (int i = sourceLen - 1; i >= 0; i--) {
        for (int j = i; j < sourceLen; j++) {
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
        }
    }

    totalRows = 0;
    totalCells = 0;
    totalChars = 0;
    countPartitions(0, 0, 0);

    answers = (char***)malloc(sizeof(char**) * totalRows);
    columnSizes = (int*)malloc(sizeof(int) * totalRows);
    cellPool = (char**)malloc(sizeof(char*) * totalCells);
    charPool = (char*)malloc(sizeof(char) * totalChars);

    rowIndex = 0;
    cellIndex = 0;
    charIndex = 0;
    buildPartitions(0, 0);

    *returnSize = totalRows;
    *returnColumnSizes = columnSizes;
    return answers;
}
