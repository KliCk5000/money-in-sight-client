import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddTransactionForm extends Component {
  state = {};

  render() {
    const handleSubmit = this.props.handleSubmit;

    return (
      <section>
        <form onSubmit={handleSubmit}>
          <label>Add transaction</label>
          <div>
            <label htmlFor="payee">Payee</label>
            <Field name="payee" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="type">Income or Expense</label>
            <Field name="type" component="select">
              <option value="income">income/paycheck</option>
              <option value="expense">expense/bill</option>
            </Field>
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <Field name="amount" component="input" type="number" />
          </div>
          <div>
            <label htmlFor="reoccuring">Reoccuring</label>
            <Field name="reoccuring" component="input" type="checkbox" />
          </div>
          <div>
            <button type="submit">Add Transaction</button>
          </div>
        </form>
      </section>
    );
  }
}

export default reduxForm({
  form: 'add-transaction-form',
})(AddTransactionForm);
