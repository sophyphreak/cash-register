import React, { Component } from 'react';
import { Button, Col, Input, Label, Row } from 'reactstrap';
import { isValidPrice } from 'dao-of-validation';
import { rowStyle } from './mainStyle';
import initializeState from './helpers/initializeState';
import getClearState from './helpers/getClearState';
import { checkCashRegister } from '../checkCashRegister/checkCashRegister';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = initializeState();
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCashChange = this.handleCashChange.bind(this);
    this.handleCashInDrawerChange = this.handleCashInDrawerChange.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onClear = this.onClear.bind(this);
  }
  handlePriceChange(e) {
    const price = e.target.value;
    if (isValidPrice(price)) {
      const { cash, cashInDrawer } = this.state;
      const { status, change } = checkCashRegister(price, cash, cashInDrawer);
      this.setState({ price, status, change });
    }
  }
  handleCashChange(e) {
    const cash = e.target.value;
    if (isValidPrice(cash)) {
      const { price, cashInDrawer } = this.state;
      const { status, change } = checkCashRegister(price, cash, cashInDrawer);
      this.setState({ cash, status, change });
    }
  }
  handleCashInDrawerChange(e) {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      const { price, cash, cashInDrawer } = this.state;
      cashInDrawer[name] = value;
      const { status, change } = checkCashRegister(price, cash, cashInDrawer);
      this.setState({ cashInDrawer, status, change });
    }
  }
  onReset() {
    const state = initializeState();
    this.setState(state);
  }
  onClear() {
    const state = getClearState();
    this.setState(state);
  }
  render() {
    return (
      <div>
        <Row style={rowStyle}>
          <Col sm={{ size: 2, offset: 3 }} xs="6">
            <Label>Price in dollars:</Label>
            <Input
              name="price"
              value={this.state.price}
              onChange={this.handlePriceChange}
            />
          </Col>
          <Col sm={{ size: 2, offset: 2 }} xs="6">
            <Label>Cash given to cashier:</Label>
            <Input
              name="cash"
              value={this.state.cash}
              onChange={this.handleCashChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={{ size: 2, offset: 3 }} xs="6">
            <Label>
              <h4>Cash in register:</h4>
            </Label>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 1, offset: 1 }} xs="4">
            <Label>Hundred Dollar Bills:</Label>
            <Input
              name="oneHundreds"
              value={this.state.cashInDrawer.oneHundreds}
              onChange={this.handleCashInDrawerChange}
            />
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Twenty Dollar Bills:</Label>
            <Input
              name="twenties"
              value={this.state.cashInDrawer.twenties}
              onChange={this.handleCashInDrawerChange}
            />
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Ten Dollar Bills:</Label>
            <Input
              name="tens"
              value={this.state.cashInDrawer.tens}
              onChange={this.handleCashInDrawerChange}
            />
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Five Dollar Bills:</Label>
            <Input
              name="fives"
              value={this.state.cashInDrawer.fives}
              onChange={this.handleCashInDrawerChange}
            />
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>One Dollar Bills:</Label>
            <Input
              name="ones"
              value={this.state.cashInDrawer.ones}
              onChange={this.handleCashInDrawerChange}
            />
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Quarters:</Label>
            <Input
              name="quarters"
              value={this.state.cashInDrawer.quarters}
              onChange={this.handleCashInDrawerChange}
            />
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Dimes:</Label>
            <Input
              name="dimes"
              value={this.state.cashInDrawer.dimes}
              onChange={this.handleCashInDrawerChange}
            />
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Nickles:</Label>
            <Input
              name="nickels"
              value={this.state.cashInDrawer.nickels}
              onChange={this.handleCashInDrawerChange}
            />
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Pennies:</Label>
            <Input
              name="pennies"
              value={this.state.cashInDrawer.pennies}
              onChange={this.handleCashInDrawerChange}
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col sm={{ size: 6, offset: 3 }} xs="6">
            <Label>
              <h4>Status: {this.state.status}</h4>
            </Label>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={{ size: 2, offset: 3 }} xs="6">
            <Label>
              <h4>Change given to customer:</h4>
            </Label>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 1, offset: 1 }} xs="4">
            <Label>Hundred Dollar Bills:</Label>
            <br />

            <Label>
              <h4>{this.state.change.oneHundreds}</h4>
            </Label>
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Twenty Dollar Bills:</Label>
            <br />

            <Label>
              <h4>{this.state.change.twenties}</h4>
            </Label>
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Ten Dollar Bills:</Label>
            <br />

            <Label>
              <h4>{this.state.change.tens}</h4>
            </Label>
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Five Dollar Bills:</Label>
            <br />

            <Label>
              <h4>{this.state.change.fives}</h4>
            </Label>
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>One Dollar Bills:</Label>
            <br />

            <Label>
              <h4>{this.state.change.ones}</h4>
            </Label>
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Quarters:</Label>
            <br />
            <Label>
              <h4>{this.state.change.quarters}</h4>
            </Label>
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Dimes:</Label>
            <br />
            <Label>
              <h4>{this.state.change.dimes}</h4>
            </Label>
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Nickels:</Label>
            <br />
            <Label>
              <h4>{this.state.change.nickels}</h4>
            </Label>
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Label>Pennies:</Label>
            <br />
            <Label>
              <h4>{this.state.change.pennies}</h4>
            </Label>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={{ size: 1, offset: 5 }} xs="4">
            <Button onClick={this.onClear}>Clear</Button>
          </Col>
          <Col sm={{ size: 1 }} xs="4">
            <Button onClick={this.onReset}>Reset</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
