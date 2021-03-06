import React, { Component } from 'react';
import '../stylesheets/Day.css';

class Day extends Component {
  state = {
    todaysDate: this.props.formatedDateToRender,
    bills: this.props.billsForThisDay,
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
    return <div className="ending-balance">${this.state.endOfDayBalance}</div>;
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.billsForThisDay.length !== prevProps.billsForThisDay.length ||
      this.props.endOfDayBalance !== prevProps.endOfDayBalance
    ) {
      this.setState({
        bills: this.props.billsForThisDay,
        endOfDayBalance: this.props.endOfDayBalance,
      });
    }
  }

  render() {
    // Before you render, check to see if the day is from the current month or not
    if (this.props.currentMonth === false) {
      return <div className={this.props.className}>{this.renderDate()}</div>;
    } else {
      return (
        <div className={this.props.className} onClick={this.props.onClick}>
          {this.renderDate()} {this.renderBills()} {this.renderEndingBalance()}
        </div>
      );
    }
  }
}

export default Day;
