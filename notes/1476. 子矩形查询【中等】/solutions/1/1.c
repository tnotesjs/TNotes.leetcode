typedef struct {
    int** rect;
    int rows, cols;
    int updates[500][5];
    int updateSize;
} SubrectangleQueries;

SubrectangleQueries* subrectangleQueriesCreate(int** rectangle, int rectangleSize,
                                                int* rectangleColSize) {
    SubrectangleQueries* obj = (SubrectangleQueries*)malloc(sizeof(SubrectangleQueries));
    obj->rect = rectangle;
    obj->rows = rectangleSize;
    obj->cols = rectangleColSize[0];
    obj->updateSize = 0;
    return obj;
}

void subrectangleQueriesUpdateSubrectangle(SubrectangleQueries* obj,
    int row1, int col1, int row2, int col2, int newValue) {
    int i = obj->updateSize++;
    obj->updates[i][0] = row1; obj->updates[i][1] = col1;
    obj->updates[i][2] = row2; obj->updates[i][3] = col2;
    obj->updates[i][4] = newValue;
}

int subrectangleQueriesGetValue(SubrectangleQueries* obj, int row, int col) {
    for (int i = obj->updateSize - 1; i >= 0; i--) {
        if (row >= obj->updates[i][0] && row <= obj->updates[i][2] &&
            col >= obj->updates[i][1] && col <= obj->updates[i][3])
            return obj->updates[i][4];
    }
    return obj->rect[row][col];
}

void subrectangleQueriesFree(SubrectangleQueries* obj) { free(obj); }
