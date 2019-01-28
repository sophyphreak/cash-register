const initializeState = () => ({
  price: 19.5,
  cash: 20,
  cashInDrawer: {
    pennies: 101,
    nickels: 41,
    dimes: 31,
    quarters: 17,
    ones: 90,
    fives: 11,
    tens: 2,
    twenties: 3,
    oneHundreds: 1
  },
  change: {
    pennies: 0,
    nickels: 0,
    dimes: 0,
    quarters: 2,
    ones: 0,
    fives: 0,
    tens: 0,
    twenties: 0,
    oneHundreds: 0
  },
  status: 'OPEN'
});

export default initializeState;
