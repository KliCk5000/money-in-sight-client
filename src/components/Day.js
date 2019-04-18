import React, { Component } from 'react';
import '../stylesheets/Day.css';

class Day extends Component {
  state = {
    todaysDate: this.props.formatedDateToRender,
    bills: this.props.billsForThisDay,
    previousDayBalance: this.props.previousDayBalance,
    endOfDayBalance: this.props.endOfDayBalance,
  };

  // Formated Date To Render
  renderDate() {
    return <div className="date">{this.state.todaysDate}</div>;
  }

  // Bills for this date
  renderBills() {
    let billsToRender = this.state.bills.map((bill) => (
      <div key={bill.id}>{`${bill.payee} $${bill.amount}`}</div>
    ));
    return <div className="bills">{billsToRender}</div>;
  }

  // Ending Balance
  renderEndingBalance() {
    return <div className="ending-balance">EOD ${this.state.endOfDayBalance}</div>;
  }

  render() {
    // Before you render, check to see if the day is from the current month or not
    if (this.props.className.search('not-current-month') !== -1) {
      return (
        <div
          className={this.props.className}
        >
          {this.renderDate()}
        </div>
      );
    } else {
      return (
        <div
          className={this.props.className}
          onClick={this.props.onClick}
        >
          {this.renderDate()} {this.renderBills()} {this.renderEndingBalance()}
        </div>
      );
    }
  }
}

export default Day;
