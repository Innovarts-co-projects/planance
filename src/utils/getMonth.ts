function getMonth(date: string) {
  const month = date.replace(/\D/g, '').split('').slice(4, 6).join('');
  return Number(month);
}

export default getMonth;
