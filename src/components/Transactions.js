import React, { Component } from "react";
import * as dateFns from "date-fns";
import { connect } from "react-redux";

import {
  filterBillsForDate,
  calcEndOfDayBalance,
  filterAllBillsBeforeDate
} from "../utils/helperFunctions";
import { deleteTransaction } from "../actions";

import "../stylesheets/Transactions.css";

class Transactions extends Component {
  handleDeleteTransaction(value) {
    this.props.deleteTransaction(value);
  }

  renderTableForDate() {
    let billsForThisDay = filterBillsForDate(
      this.props.bills,
      this.props.calendar.selectedDate
    );

    if (billsForThisDay.length === 0) {
      return (
        <table className="transactions-table">
          <caption>No transactions for today!</caption>
        </table>
      );
    } else {
      let tableEntries = billsForThisDay.map(bill => {
        return (
          <tr key={bill.id}>
            <td>{bill.payee}</td>
            <td>{bill.amount}</td>
            {/* <td>{(bill.amount - balance)}</td> */}
            <td>
              <button onClick={() => this.handleDeleteTransaction(bill.id)}>
                Delete
              </button>
            </td>
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
              <th>Delete</th>
              {/* <th>Running Balance</th> */}
            </tr>
          </thead>
          <tbody>{tableEntries}</tbody>
        </table>
      );
    }
  }

  render() {
    const selectedDateFormat = "MMMM Do, yyyy";
    const selectedDate = dateFns.format(
      this.props.calendar.selectedDate,
      selectedDateFormat
    );
    const startingBalance = this.props.calendar.startingBalance;
    const runningBills = filterAllBillsBeforeDate(
      this.props.bills,
      dateFns.addDays(this.props.calendar.selectedDate, 1)
    );
    const endingBalance = calcEndOfDayBalance(startingBalance, runningBills);

    return (
      <div className="transactions-container">
        <div>
          Currently Selected Date - {selectedDate} - Balance: ${endingBalance}
        </div>
        {this.renderTableForDate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { deleteTransaction })(Transactions);
