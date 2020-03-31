import React, { Component } from "react";
import * as dateFns from "date-fns";

import {
  filterBillsForDate,
  calcEndOfDayBalance,
  filterAllBillsBeforeDate
} from "../utils/helperFunctions";
import Day from "./Day";
import "../stylesheets/DaysOfMonth.css";

class DaysOfMonth extends Component {
  getDaysToRender() {
    // Setup all variables
    let { currentDate, selectedDate, startingBalance } = this.props;
    const monthStart = dateFns.startOfMonth(currentDate);
    const monthEnd = dateFns.endOfMonth(currentDate);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dayFormat = "d";
    let rows = [];
    let days = [];
    let dayIteration = startDate;
    let formatedDateToRender = "";

    // Loop through add the Days that need to be rendered,
    // and create proper <divs> for each day
    while (dayIteration <= endDate) {
      for (let i = 0; i < 7; i++) {
        let dateToParse = dayIteration; // Date used by click event
        formatedDateToRender = dateFns.format(dayIteration, dayFormat); // Send to <Day />

        // Does date have any bills associated with it?
        let billsForThisDay = filterBillsForDate(
          this.props.bills,
          dayIteration
        );

        // Is date not the current month?
        let currentMonthCssClass = "";
        let beginningBalance = 0;
        let endingBalance = 0;
        let dayComponentToRender = <Day />;
        let selectedDateCssClass = "";

        let allBillsBeforeAndOnDate = filterAllBillsBeforeDate(
          this.props.bills,
          dateFns.addDays(dayIteration, 1)
        );

        endingBalance = calcEndOfDayBalance(
          startingBalance,
          allBillsBeforeAndOnDate
        );

        // Check to see if its same month or not
        if (dateFns.isSameMonth(dayIteration, monthStart)) {
          currentMonthCssClass = "";

          // Is date currently selected?
          selectedDateCssClass = dateFns.isSameDay(dayIteration, selectedDate)
            ? "selected-date"
            : "";
          dayComponentToRender = (
            <Day
              className={`day ${currentMonthCssClass} ${selectedDateCssClass}`}
              key={`day ${dayIteration}`}
              onClick={() => this.handleDateClick(dateToParse)}
              formatedDateToRender={formatedDateToRender}
              billsForThisDay={billsForThisDay}
              previousDayBalance={beginningBalance}
              endOfDayBalance={endingBalance}
              currentMonth={true}
            />
          );
        } else {
          currentMonthCssClass = "not-current-month";
          dayComponentToRender = (
            <Day
              className={`day ${currentMonthCssClass} ${selectedDateCssClass}`}
              key={`day ${dayIteration}`}
              onClick={() => this.handleDateClick(dateToParse)}
              formatedDateToRender={formatedDateToRender}
              billsForThisDay={billsForThisDay}
              previousDayBalance={beginningBalance}
              endOfDayBalance={endingBalance}
              currentMonth={false}
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
        </div>
      );

      days = [];
    }
    return rows;
    //<div className="day-container">{rows}</div>;
  }

  componentDidUpdate() {}

  handleDateClick = dateToParse => {
    return this.props.onDateClick(dateFns.parse(dateToParse));
  };

  render() {
    return <div className="day-container">{this.getDaysToRender()}</div>;
  }
}

export default DaysOfMonth;
