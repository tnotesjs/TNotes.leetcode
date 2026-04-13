int removeDuplicates(int* nums, int numsSize) {
	int slow = 0;

	for (int fast = 1; fast < numsSize; fast++) {
		if (nums[fast] != nums[slow]) {
			nums[++slow] = nums[fast];
		}
	}

	return slow + 1;
}
