export const getToday = () => {
  const today = new Date();
  const year = `${today.getFullYear()}`;
  const month = `${today.getMonth() + 1}`;
  const date = `${today.getDate()}`;
  return year + month.padStart(2, '0') + date.padStart(2, '0');
};
