const {
  makeInsufficientFundsObject
} = require('./helpers/makeInsufficientFundsObject');
const { moveDrawerToChange } = require('./helpers/moveDrawerToChange');
const { getEmptyCashDrawer } = require('./helpers/getEmptyCashDrawer');

const checkCashRegister = (price, cash, cid = getEmptyCashDrawer()) => {
  if (cash < price) {
    return {
      status: "customer doesn't have enough cash",
      change: {}
    };
  }
  const cashInDrawer = Object.assign({}, cid);
  const changeRequired = cash - price;
  const insufficientFundsObject = makeInsufficientFundsObject();
  const changeObject = moveDrawerToChange(changeRequired, cashInDrawer);
  if (changeObject === 'INSUFFICIENT_FUNDS') {
    return insufficientFundsObject;
  } else if (changeObject === 'CLOSED') {
    return {
      status: 'CLOSED',
      change: cashInDrawer
    };
  } else {
    return {
      status: 'OPEN',
      change: changeObject
    };
  }
};

module.exports = {
  checkCashRegister
};
