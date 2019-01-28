const {
  makeInsufficientFundsObject
} = require('./helpers/makeInsufficientFundsObject');
const { moveDrawerToChange } = require('./helpers/moveDrawerToChange');
const { getEmptyCashDrawer } = require('./helpers/getEmptyCashDrawer');

const checkCashRegister = (price, cash, cid = getEmptyCashDrawer()) => {
  if (price) {
    price = parseFloat(price);
  } else {
    price = 0;
  }
  if (cash) {
    cash = parseFloat(cash);
  } else {
    cash = 0;
  }
  if (cash < price) {
    return {
      status: "customer doesn't have enough cash",
      change: {}
    };
  }
  if (!price) price = 0;
  if (!cash) cash = 0;
  const cashInDrawer = Object.assign({}, cid);
  Object.keys(cashInDrawer).forEach(key => {
    if (!cashInDrawer[key]) {
      cashInDrawer[key] = 0;
    } else {
      cashInDrawer[key] = parseInt(cashInDrawer[key]);
    }
  });
  const changeRequired = cash - price;
  const insufficientFundsObject = makeInsufficientFundsObject();
  const changeObject = moveDrawerToChange(changeRequired, cashInDrawer);
  if (changeObject === 'INSUFFICIENT_FUNDS') {
    return insufficientFundsObject;
  } else {
    return changeObject;
  }
};

console.log(checkCashRegister(19.5, 20, { pennies: 50 }));
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
module.exports = {
  checkCashRegister
};
