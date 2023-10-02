export const getCurrentDateTime = () => {
  const now = new Date();

  const year = now.getFullYear().toString().substring(2);
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const hour = now.getHours();
  let stringHour = String(hour);
  if (hour < 10) {
    stringHour = String(hour).padStart(2, '0');
  }

  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${year}${month}${day}-${stringHour}:${minutes}`;
};
