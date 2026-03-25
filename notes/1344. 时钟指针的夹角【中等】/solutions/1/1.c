double angleClock(int hour, int minutes) {
    double minuteAngle = minutes * 6.0;
    double hourAngle = (hour % 12) * 30.0 + minutes * 0.5;
    double diff = fabs(hourAngle - minuteAngle);
    return diff < 360 - diff ? diff : 360 - diff;
}
