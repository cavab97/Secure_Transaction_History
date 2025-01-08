import moment from 'moment-timezone';

export const timeAgo = (date: number, tz = 'UTC') => {
  if (!date) {
    return null;
  }
  return moment.tz(date, 'UTC').fromNow();
};

export const getTimeDate = (date: number, tz = 'UTC') => {
  if (!date) {
    return null;
  }
  return moment.tz(date, 'UTC').format('DD/MM/YYYY [at] hh:mma');
};

export const unixToDate = (unix: any, format: any) => {
  return unix
    ? moment.unix(unix).tz('Asia/Singapore').format(format).toUpperCase()
    : null;
};
export const dateToUnix = (date: string | number | Date) => {
  return date ? Math.floor(new Date(date).getTime() / 1000) : null;
};

export const changeFormat = (
  date: moment.MomentInput,
  format: string | undefined,
) => {
  return date ? moment(date).format(format).toUpperCase() : null;
};

export const getDaysInMonthUTC = (month: number, year: number) => {
  let date = new Date(year, month, 1);
  let days = [];
  while (date.getMonth() === month) {
    days.push({
      day: date.getDate(),
      date: date.getTime() / 1000,
      bins_flotsam: 0,
    });

    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const dates = (current: any) => {
  let week = new Array();
  // Starting Monday not Sunday
  current.setDate(current.getDate() - current.getDay() + 1);
  for (let i = 0; i < 7; i++) {
    week.push({
      day: current.getDate(),
      date: Math.floor(current.getTime() / 1000),
      bins_flotsam: Math.random() * 10,
    });
    current.setDate(current.getDate() + 1);
  }
  return week;
};

export const getSunday = () => {
  const today = moment();
  const from_date = today.startOf('week');
  const to_date = today.endOf('week');
  console.log({
    from_date: from_date.toString(),
    today: moment().toString(),
    to_date: to_date.toString(),
  });
};
