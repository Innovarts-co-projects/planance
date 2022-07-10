function currencyMask(value: string) {
  const filteredValue = value.replace(/[\D]/g, '');
  if (filteredValue.length === 0) return 0.0;
  if (filteredValue.length === 1) return Number(`0.0${filteredValue}`);
  if (filteredValue.length === 2) return Number(`0.${filteredValue}`);

  const newValue = filteredValue.split('');
  const lastdigit = newValue.pop();
  const bottomValue = `${newValue.pop()}${lastdigit}`;

  return Number(`${newValue.join('')}.${bottomValue}`);
}

export default currencyMask;
