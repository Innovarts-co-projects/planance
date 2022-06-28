function currencyFormatter({
  currency,
  value,
}: {
  currency: string;
  value: number;
}) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  });

  return formatter.format(value);
}

export default currencyFormatter;
