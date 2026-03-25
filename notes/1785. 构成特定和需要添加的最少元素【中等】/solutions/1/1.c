#include <stdlib.h>

int minElements(int* nums, int numsSize, int limit, int goal) {
  long long sum = 0;
  for (int i = 0; i < numsSize; i++) sum += nums[i];
  long long diff = llabs((long long)goal - sum);
  return (int)((diff + limit - 1) / limit);
}
