interface Date {
  nextDay(): string;
}

Date.prototype.nextDay = function (): string {
  const nextDate = new Date(this.valueOf());
  nextDate.setDate(this.getDate() + 1);

  const year = nextDate.getFullYear();
  const month = (nextDate.getMonth() + 1).toString().padStart(2, '0');
  const day = nextDate.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

/**
 * const date = new Date("2014-06-20");
 * date.nextDay(); // "2014-06-21"
 */