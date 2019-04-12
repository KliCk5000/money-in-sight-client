import React, { Component } from 'react';
import dateFns from 'date-fns';
import { connect } from 'react-redux';

import '../stylesheets/Transactions.css';

class Transactions extends Component {
  render() {
    const selectedDateFormat = 'MMMM Do, YYYY';
    const selectedDate = dateFns.format(
      this.props.calendar.selectedDate,
      selectedDateFormat,
    );

    return (
      <div className="transactions-container">
        <div>Currently Selected Date - {selectedDate} - Balance: $500</div>
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

const mapStateToProps = (state) => {
  return state;
};

export default connect(
  mapStateToProps,
  null,
)(Transactions);
