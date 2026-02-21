int countStudents(int* students, int studentsSize, int* sandwiches, int sandwichesSize) {
    int cnt0 = 0, cnt1 = 0;
    for (int i = 0; i < studentsSize; i++) {
        students[i] == 0 ? cnt0++ : cnt1++;
    }
    for (int i = 0; i < sandwichesSize; i++) {
        if (sandwiches[i] == 0) {
            if (cnt0 == 0) return cnt1;
            cnt0--;
        } else {
            if (cnt1 == 0) return cnt0;
            cnt1--;
        }
    }
    return 0;
}
