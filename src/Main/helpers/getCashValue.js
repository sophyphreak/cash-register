const getCashValue = (unitOfMoney, multiplier) => {
  if (unitOfMoney) {
    const result = unitOfMoney * multiplier;
    return '$' + result.toFixed(2);
  }
};

export default getCashValue;
