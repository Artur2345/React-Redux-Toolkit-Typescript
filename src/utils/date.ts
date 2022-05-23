export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate();

  return `${year}.${month}.${day}`
}
