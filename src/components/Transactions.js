import React, { Component } from 'react';
import dateFns from 'date-fns';
import { connect } from 'react-redux';

import { filterBillsForDate } from '../utils/helperFunctions';

import '../stylesheets/Transactions.css';

class Transactions extends Component {
  renderTableForDate() {
    let billsForThisDay = filterBillsForDate(
      this.props.bills,
      this.props.calendar.selectedDate,
    );

    if (billsForThisDay.length === 0) {
      return (
        <table className="transactions-table">
          <caption>No transactions for today!</caption>
        </table>
      );
    } else {
      let tableEntries = billsForThisDay.map((bill) => {
        return (
          <tr key={bill.id}>
            <td>{bill.payee}</td>
            <td>{bill.amount}</td>
            <td>{'temp'}</td>
          </tr>
        );
      });

      return (
        <table className="transactions-table">
          <caption>My transactions</caption>
          <thead>
            <tr>
              <th>Payee</th>
              <th>Amount</th>
              <th>Running Balance</th>
            </tr>
          </thead>
          <tbody>{tableEntries}</tbody>
        </table>
      );
    }
  }

  render() {
    const selectedDateFormat = 'MMMM Do, YYYY';
    const selectedDate = dateFns.format(
      this.props.calendar.selectedDate,
      selectedDateFormat,
    );

    return (
      <div className="transactions-container">
        <div>Currently Selected Date - {selectedDate} - Balance: $500</div>
        {this.renderTableForDate()}
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
