const getClearState = () => ({
  price: '',
  cash: '',
  cashInDrawer: {
    pennies: '',
    nickels: '',
    dimes: '',
    quarters: '',
    ones: '',
    fives: '',
    tens: '',
    twenties: '',
    oneHundreds: ''
  },
  change: {
    pennies: '',
    nickels: '',
    dimes: '',
    quarters: '',
    ones: '',
    fives: '',
    tens: '',
    twenties: '',
    oneHundreds: ''
  },
  status: ''
});

export default getClearState;
