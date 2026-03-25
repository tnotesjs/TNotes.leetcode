long long numberOfWeeks(int* milestones, int milestonesSize) {
  long long total = 0, maxVal = 0;
  for (int i = 0; i < milestonesSize; i++) {
    total += milestones[i];
    if (milestones[i] > maxVal) maxVal = milestones[i];
  }
  long long rest = total - maxVal;
  return rest >= maxVal ? total : 2 * rest + 1;
}
