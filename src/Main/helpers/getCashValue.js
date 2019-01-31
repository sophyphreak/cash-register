const getCashValue = (unitOfMoney, multiplier) => {
  if (unitOfMoney) {
    const result = Math.round(unitOfMoney * multiplier * 100, 2) / 100;
    if (result % 1 && !result % 0.01) {
      return '$' + result + '0';
    }
    return '$' + result;
  }
};

export default getCashValue;
