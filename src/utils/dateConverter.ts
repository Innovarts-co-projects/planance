function dateConverter(dateString: string, to: 'input' | 'display') {
  if (to === 'input') {
    const date = dateString.replace(/\//g, '').split('');

    const month = date.shift() + date.shift();
    const day = date.shift() + date.shift();
    const year = date.join('');

    return `${year}-${month}-${day}`;
  }

  if (to === 'display') {
    const date = dateString.replace(/-/g, '').split('');

    const year = date.shift() + date.shift() + date.shift() + date.shift();
    const month = date.shift() + date.shift();
    const day = date.join('');

    return `${month}/${day}/${year}`;
  }
  return 'MM-DD-YYYY';
}

export default dateConverter;
