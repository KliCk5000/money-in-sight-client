import React, { Component } from 'react';

import Calendar from './Calendar';
import Transactions from './Transactions';

const wireframe = (
  <div>
    <main role="main">
      <Calendar />
      <Transactions />

      <section>
        <form>
          <label>Add transaction</label>
          <label>Payee</label>
          <input type="text" />
          <label>Income or Expense</label>
          <select name="income/expense">
            <option value="income">income/paycheck</option>
            <option value="expense">expense/bill</option>
          </select>
          <label>Amount</label>
          <input type="number" />
          <label>Reoccuring</label>
          <input type="checkbox" />
        </form>
      </section>
    </main>
    <footer role="contentinfo">Created by Nick Dean</footer>
    <script src="script.js" />
  </div>
);

class MainPage extends Component {
  state = {};
  render() {
    return wireframe;
  }
}

export default MainPage;
