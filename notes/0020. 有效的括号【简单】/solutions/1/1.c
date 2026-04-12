bool isValid(char* s) {
	int len = strlen(s);
	if (len % 2 != 0) return false;

	char* stack = (char*)malloc(sizeof(char) * len);
	int top = 0;

	for (int i = 0; i < len; i++) {
		char ch = s[i];

		if (ch == '(') {
			stack[top++] = ')';
		} else if (ch == '[') {
			stack[top++] = ']';
		} else if (ch == '{') {
			stack[top++] = '}';
		} else {
			if (top == 0 || ch != stack[--top]) {
				free(stack);
				return false;
			}
		}
	}

	bool valid = top == 0;
	free(stack);
	return valid;
}
