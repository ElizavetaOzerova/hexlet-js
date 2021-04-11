export default (str) => {
  if (str.length === 0) {
    return '';
  }

  const [firstSymbol, ...restSymbols] = str;
  return `${firstSymbol.toUpperCase()}${restSymbols.join('')}`;
};
