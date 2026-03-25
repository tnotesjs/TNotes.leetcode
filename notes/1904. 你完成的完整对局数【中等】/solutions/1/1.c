int numberOfRounds(char* loginTime, char* logoutTime) {
  int sh = (loginTime[0]-'0')*10 + loginTime[1]-'0';
  int sm = (loginTime[3]-'0')*10 + loginTime[4]-'0';
  int eh = (logoutTime[0]-'0')*10 + logoutTime[1]-'0';
  int em = (logoutTime[3]-'0')*10 + logoutTime[4]-'0';
  int start = sh*60+sm, end = eh*60+em;
  if (end < start) end += 1440;
  start = (start + 14) / 15 * 15;
  int res = end / 15 - start / 15;
  return res > 0 ? res : 0;
}
