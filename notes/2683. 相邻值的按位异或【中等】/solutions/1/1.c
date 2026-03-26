bool doesValidArrayExist(int* derived, int derivedSize) {
    int xorVal = 0;
    for (int i = 0; i < derivedSize; i++) xorVal ^= derived[i];
    return xorVal == 0;
}
