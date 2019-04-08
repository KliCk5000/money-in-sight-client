import React, { Component } from 'react';

import '../stylesheets/Transactions.css';

class Tansactions extends Component {
  state = {};
  render() {
    return (
      <div className="transactions-container">
        <div>Current Date - April 9th, 2019 - Balance: $500</div>
          <table className="transactions-table">
            <caption>My transactions</caption>
            <thead>
              <tr>
                <th>Payee</th>
                <th>Amount</th>
                <th>Running Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rent</td>
                <td>$1000</td>
                <td>$815</td>
              </tr>
              <tr>
                <td>Netflix</td>
                <td>$15</td>
                <td>$800</td>
              </tr>
              <tr>
                <td>Car Payment</td>
                <td>$300</td>
                <td>$500</td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
}

export default Tansactions;
