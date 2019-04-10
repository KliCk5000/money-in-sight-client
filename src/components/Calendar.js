import React, { Component } from 'react';
import dateFns from 'date-fns';

import '../stylesheets/Calendar.css';

import Days from './Days';

class Calendar extends Component {
  state = {
    currentDate: new Date(),
    selectedDate: new Date(),
  };

  renderHeader() {
    const headerDateFormat = "MMMM YYYY";
    return (
    <div>
      <div onClick={this.prevMonth}>Click here for Previous Month</div>
      {dateFns.format(this.state.currentDate, headerDateFormat)}
      <div onClick={this.nextMonth}>Click here for Next Month</div>
    </div>);
  }

  renderDaysOfWeek() {
    const daysOfWeekFormat = "ddd";
    let startDateOfTheWeek = dateFns.startOfWeek(this.state.currentDate);
    let daysToRender = [];

    for (let day = 0; day < 7; day++) {
      daysToRender.push(
        <div className="dayOfWeek" key={`day${day}`}>
          {dateFns.format(dateFns.addDays(startDateOfTheWeek, day), daysOfWeekFormat)}
        </div>
      );
    }

    return <div className="dayOfWeek-container">{daysToRender}</div>;
  }

  nextMonth = () => {
    this.setState({
      currentDate: dateFns.addMonths(this.state.currentDate, 1)
    });
  }

  prevMonth = () => {
    this.setState({
      currentDate: dateFns.subMonths(this.state.currentDate, 1)
    })
  }

  render() {
    return (
      <div>
        <div className="calendar-container">
          <div className="calendar">
            {this.renderHeader()}
            {this.renderDaysOfWeek()}
            <Days
              currentDate={this.state.currentDate}
              selectedDate={this.state.selectedDate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
