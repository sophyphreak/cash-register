const moveDrawerToChange = (changeRequired, cashInDrawer) => {
  let changeAmount = 0;
  let changeObject = {
    pennies: 0,
    nickels: 0,
    dimes: 0,
    quarters: 0,
    ones: 0,
    fives: 0,
    tens: 0,
    twenties: 0,
    oneHundreds: 0
  };
  while ((changeRequired - changeAmount) / 100 >= 1) {
    if (cashInDrawer.oneHundreds > 0) {
      cashInDrawer.oneHundreds--;
      changeObject.oneHundreds++;
      changeAmount += 100;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 20 >= 1) {
    if (cashInDrawer.twenties > 0) {
      cashInDrawer.twenties--;
      changeObject.twenties++;
      changeAmount += 20;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 10 >= 1) {
    if (cashInDrawer.tens > 0) {
      cashInDrawer.tens--;
      changeObject.tens++;
      changeAmount += 10;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 5 >= 1) {
    if (cashInDrawer.fives > 0) {
      cashInDrawer.fives--;
      changeObject.fives++;
      changeAmount += 5;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 1 >= 1) {
    if (cashInDrawer.ones > 0) {
      cashInDrawer.ones--;
      changeObject.ones++;
      changeAmount += 1;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 0.25 >= 1) {
    if (cashInDrawer.quarters > 0) {
      cashInDrawer.quarters--;
      changeObject.quarters++;
      changeAmount += 0.25;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 0.1 >= 1) {
    if (cashInDrawer.dimes > 0) {
      cashInDrawer.dimes--;
      changeObject.dimes++;
      changeAmount += 0.1;
    } else {
      break;
    }
  }
  while ((changeRequired - changeAmount) / 0.05 >= 1) {
    if (cashInDrawer.nickels > 0) {
      cashInDrawer.nickels--;
      changeObject.nickels++;
      changeAmount += 0.05;
    } else {
      break;
    }
  }
  while (changeRequired - changeAmount > 0) {
    if (cashInDrawer.pennies > 0) {
      cashInDrawer.pennies--;
      changeObject.pennies++;
      changeAmount += 0.01;
    } else {
      break;
    }
  }
  console.log(cashInDrawer);
  if (changeRequired - changeAmount > 0) {
    return 'INSUFFICIENT_FUNDS';
  } else if (
    !cashInDrawer.pennies &&
    !cashInDrawer.nickels &&
    !cashInDrawer.dimes &&
    !cashInDrawer.quarters &&
    !cashInDrawer.ones &&
    !cashInDrawer.fives &&
    !cashInDrawer.tens &&
    !cashInDrawer.twenties &&
    !cashInDrawer.oneHundreds
  ) {
    return {
      status: 'CLOSED',
      change: changeObject
    };
  } else {
    return {
      status: 'OPEN',
      change: changeObject
    };
  }
};

module.exports = {
  moveDrawerToChange
};
