int rand10() {
    int num;
    do {
        num = (rand7() - 1) * 7 + rand7();
    } while (num > 40);
    return (num - 1) % 10 + 1;
}
