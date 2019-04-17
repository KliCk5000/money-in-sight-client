import React, { Component } from 'react';
import dateFns from 'date-fns';

import { filterBillsForDate } from '../utils/helperFunctions';
import '../stylesheets/Days.css';

class Days extends Component {
  handleDateClick = (dateToParse) => {
    return this.props.onDateClick(dateFns.parse(dateToParse))
  }

  render() {
    let { currentDate, selectedDate } = this.props;
    const monthStart = dateFns.startOfMonth(currentDate);
    const monthEnd = dateFns.endOfMonth(currentDate);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dayFormat = 'D';
    let rows = [];
    let days = [];
    let dayIteration = startDate;
    let formatedDateToRender = '';

    // Loop through add the Days that need to be rendered,
    // and create proper <divs> for each day
    while (dayIteration <= endDate) {
      for (let i = 0; i < 7; i++) {
        let dateToParse = dayIteration;
        formatedDateToRender = dateFns.format(dayIteration, dayFormat);
        // const cloneDay = dayIteration;

        // Is date not the current month?
        let currentMonthCssClass = dateFns.isSameMonth(dayIteration, monthStart)
          ? ''
          : 'not-current-month';
        // Is date currently selected?
        let selectedDateCssClass = dateFns.isSameDay(dayIteration, selectedDate)
          ? 'selected-date'
          : '';

        // Does date have any bills associated with it?
        let billsForThisDay = filterBillsForDate(
          this.props.bills,
          dayIteration,
        );
        days.push(
          <div
            className={`day ${currentMonthCssClass} ${selectedDateCssClass}`}
            key={`day ${dayIteration}`}
            onClick={() => this.handleDateClick(dateToParse)}
          >
            {formatedDateToRender}
            {billsForThisDay.map((bill) => (
              <div key={bill.id}>{`${bill.payee} $${bill.amount}`}</div>
            ))}
          </div>,
        );
        dayIteration = dateFns.addDays(dayIteration, 1);
      }

      rows.push(
        <div className="row" key={`row day ${dayIteration}`}>
          {days}
        </div>,
      );

      days = [];
    }

    return <div className="day-container">{rows}</div>;
  }
}

export default Days;
