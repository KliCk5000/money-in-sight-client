import React, { Component } from 'react';
import dateFns from 'date-fns';

import {
  filterBillsForDate,
  calcEndOfDayBalance,
  filterAllBillsBeforeDate,
} from '../utils/helperFunctions';
import Day from './Day';
import '../stylesheets/DaysOfMonth.css';

class DaysOfMonth extends Component {
  getDaysToRender() {
    let { currentDate, selectedDate, balances } = this.props;
    const monthStart = dateFns.startOfMonth(currentDate);
    const monthEnd = dateFns.endOfMonth(currentDate);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const monthlyBalance = balances.find((month) =>
      dateFns.isSameMonth(month.date, monthStart),
    );
    let runningBalance = 0;
    if (
      monthlyBalance !== undefined &&
      monthlyBalance.hasOwnProperty('balance')
    ) {
      runningBalance = monthlyBalance.balance;
    }

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

        // Does date have any bills associated with it?
        let billsForThisDay = filterBillsForDate(
          this.props.bills,
          dayIteration,
        );

        // Is date not the current month?
        let currentMonthCssClass = '';
        let beginningBalance = 0;
        let endingBalance = 0;
        let dayComponentToRender = <Day />;
        let selectedDateCssClass = '';
        if (dateFns.isSameMonth(dayIteration, monthStart)) {
          currentMonthCssClass = '';
          let allBills = filterAllBillsBeforeDate(
            this.props.bills,
            dateFns.addDays(dayIteration, 1),
          );
          endingBalance = calcEndOfDayBalance(0, allBills);

          // Is date currently selected?
          selectedDateCssClass = dateFns.isSameDay(
            dayIteration,
            selectedDate,
          )
            ? 'selected-date'
            : '';
          dayComponentToRender = (
            <Day
              className={`day ${currentMonthCssClass} ${selectedDateCssClass}`}
              key={`day ${dayIteration}`}
              onClick={() => this.handleDateClick(dateToParse)}
              formatedDateToRender={formatedDateToRender}
              billsForThisDay={billsForThisDay}
              previousDayBalance={beginningBalance}
              endOfDayBalance={endingBalance}
            />
          );
        } else {
          currentMonthCssClass = 'not-current-month';
          dayComponentToRender = (
            <Day
              className={`day ${currentMonthCssClass} ${selectedDateCssClass}`}
              key={`day ${dayIteration}`}
              onClick={() => this.handleDateClick(dateToParse)}
              formatedDateToRender={formatedDateToRender}
              billsForThisDay={billsForThisDay}
              previousDayBalance={beginningBalance}
              endOfDayBalance={endingBalance}
            />
          );
        }

        // Add the Day Component that will be rendered for that row.
        days.push(dayComponentToRender);
        dayIteration = dateFns.addDays(dayIteration, 1);
      }

      rows.push(
        <div className="row" key={`row day ${dayIteration}`}>
          {days}
        </div>,
      );

      days = [];
    }
    console.log(runningBalance);
    return rows;
    //<div className="day-container">{rows}</div>;
  }

  handleDateClick = (dateToParse) => {
    return this.props.onDateClick(dateFns.parse(dateToParse));
  };

  render() {
    return <div className="day-container">{this.getDaysToRender()}</div>;
  }
}

export default DaysOfMonth;
