int removeElement(int* nums, int numsSize, int val) {
	int left = 0;
	int right = numsSize;

	while (left < right) {
		if (nums[left] == val) {
			nums[left] = nums[right - 1];
			right--;
		} else {
			left++;
		}
	}

	return right;
}
