import React, { Component } from 'react';
import { connect } from 'react-redux';

import Calendar from './Calendar';
import Transactions from './Transactions';
import AddTransactionForm from './AddTransactionForm';

import { addTransaction } from '../actions';

class MainPage extends Component {
  state = {};

  addTransactionSubmit = (values) => {
    let selectedDate = this.props.calendar.selectedDate;
    // We need to add the currently selected date to transaction
    let completedTransaction = Object.assign({}, values, { date: selectedDate });

    this.props.addTransaction(completedTransaction);
  };

  render() {
    return (
      <div>
        <main role="main">
          <Calendar className="calendar" />
          <Transactions />
          <AddTransactionForm onSubmit={this.addTransactionSubmit} />
        </main>
        <footer role="contentinfo">Created by Nick Dean</footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(
  mapStateToProps,
  { addTransaction },
)(MainPage);
