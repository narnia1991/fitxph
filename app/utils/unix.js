export const getUnix = (date = new Date()) => {
  Math.round(date.getTime() / 1000);
};
