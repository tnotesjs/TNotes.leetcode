bool canFormArray(int* arr, int arrSize, int** pieces, int piecesSize, int* piecesColSize) {
    // 值范围 1~100，将首元素映射到片段索引（0 表示未存在）
    int pieceIdx[101];
    for (int i = 0; i < 101; i++) {
        pieceIdx[i] = -1;
    }
    for (int i = 0; i < piecesSize; i++) {
        pieceIdx[pieces[i][0]] = i;
    }
    
    int i = 0;
    while (i < arrSize) {
        int start = arr[i];
        if (pieceIdx[start] == -1) {
            return false;
        }
        int idx = pieceIdx[start];
        int segLen = piecesColSize[idx];
        for (int j = 0; j < segLen; j++) {
            if (arr[i + j] != pieces[idx][j]) {
                return false;
            }
        }
        i += segLen;
    }
    
    return true;
}
