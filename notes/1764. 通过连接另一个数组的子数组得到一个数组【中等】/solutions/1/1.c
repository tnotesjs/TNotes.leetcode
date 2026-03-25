#include <stdbool.h>

bool canChoose(int** groups, int groupsSize, int* groupsColSize, int* nums, int numsSize) {
  int j = 0;
  for (int i = 0; i < groupsSize; i++) {
    int glen = groupsColSize[i];
    bool found = false;
    while (j + glen <= numsSize) {
      bool match = true;
      for (int k = 0; k < glen; k++) {
        if (nums[j + k] != groups[i][k]) {
          match = false;
          break;
        }
      }
      if (match) {
        j += glen;
        found = true;
        break;
      }
      j++;
    }
    if (!found) return false;
  }
  return true;
}
