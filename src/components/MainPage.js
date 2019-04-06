import React, { Component } from 'react';

import Calendar from './Calendar';

const wireframe = (
  <div>
    <main role="main">
      <Calendar />
      <section>
        <div>Rent - $1000</div>
        <div>Netflix - $15</div>
        <div>Car Payment - $300</div>
      </section>

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
    <footer role="content-info">Created by Nick Dean</footer>
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
