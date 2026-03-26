int cmpStr(const void *a, const void *b) {
    return strcmp(*(const char **)a, *(const char **)b);
}

int bsearchStr(char **arr, int n, const char *target) {
    int lo = 0, hi = n - 1;
    while (lo <= hi) {
        int mid = (lo + hi) / 2;
        int c = strcmp(arr[mid], target);
        if (c == 0) return 1;
        if (c < 0) lo = mid + 1;
        else hi = mid - 1;
    }
    return 0;
}

typedef struct { int score; int id; } Student;

int cmpStudent(const void *a, const void *b) {
    const Student *sa = (const Student *)a;
    const Student *sb = (const Student *)b;
    if (sa->score != sb->score) return sb->score - sa->score;
    return sa->id - sb->id;
}

int* topStudents(char** positive_feedback, int positive_feedbackSize, char** negative_feedback, int negative_feedbackSize, char** report, int reportSize, int* student_id, int student_idSize, int k, int* returnSize) {
    qsort(positive_feedback, positive_feedbackSize, sizeof(char *), cmpStr);
    qsort(negative_feedback, negative_feedbackSize, sizeof(char *), cmpStr);
    Student *students = (Student *)malloc(sizeof(Student) * reportSize);
    char buf[101];
    for (int i = 0; i < reportSize; i++) {
        int score = 0;
        const char *p = report[i];
        while (*p) {
            int j = 0;
            while (*p && *p != ' ') buf[j++] = *p++;
            buf[j] = '\0';
            if (*p == ' ') p++;
            if (bsearchStr(positive_feedback, positive_feedbackSize, buf)) score += 3;
            else if (bsearchStr(negative_feedback, negative_feedbackSize, buf)) score -= 1;
        }
        students[i].score = score;
        students[i].id = student_id[i];
    }
    qsort(students, reportSize, sizeof(Student), cmpStudent);
    int *ans = (int *)malloc(sizeof(int) * k);
    for (int i = 0; i < k; i++) ans[i] = students[i].id;
    free(students);
    *returnSize = k;
    return ans;
}
