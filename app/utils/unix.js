export const getUnix = date => {
  const newDate = new Date(date);
  return Math.round(newDate.getTime() / 1000);
};
