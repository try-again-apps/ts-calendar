import { DateTime, Interval } from 'luxon';

export const monthInterval = ({ month, year }: { month: number, year: number }) => {
  const monthStart = DateTime.fromObject({ month, year });
  const monthEnd = DateTime.fromObject({
    day: monthStart.daysInMonth,
    month,
    year
  });
  return Interval.fromDateTimes(monthStart, monthEnd);
};

export const yearValidated = (year: string) => {
  const dateTime = DateTime.fromObject({ year: +year });
  return dateTime ? dateTime.year : DateTime.local().year;
};
