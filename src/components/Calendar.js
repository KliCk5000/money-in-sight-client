import React, { Component } from 'react';
import dateFns from 'date-fns';
import { connect } from 'react-redux';
import { prevMonth, nextMonth } from '../actions';

import '../stylesheets/Calendar.css';

import Days from './Days';

class Calendar extends Component {
  handlePrevMonthClick = () => this.props.prevMonth(this.props.calendar.currentDate);
  handleNextMonthClick = () => this.props.nextMonth(this.props.calendar.currentDate);

  renderHeader() {
    const headerDateFormat = 'MMM YYYY';
    return (
      <div className="header">
        <div className="arrow-button left" onClick={this.handlePrevMonthClick}>
          &#60;
        </div>
        <div className="month-name">
          {dateFns.format(this.props.calendar.currentDate, headerDateFormat)}
        </div>
        <div className="arrow-button right" onClick={this.handleNextMonthClick}>
          &#62;
        </div>
      </div>
    );
  }

  renderDaysOfWeek() {
    const daysOfWeekFormat = 'ddd';
    let startDateOfTheWeek = dateFns.startOfWeek(this.props.calendar.currentDate);
    let daysToRender = [];

    for (let day = 0; day < 7; day++) {
      daysToRender.push(
        <div className="dayOfWeek" key={`day${day}`}>
          {dateFns.format(
            dateFns.addDays(startDateOfTheWeek, day),
            daysOfWeekFormat,
          )}
        </div>,
      );
    }

    return <div className="dayOfWeek-container">{daysToRender}</div>;
  }

  render() {
    return (
      <div>
        <div className="calendar-container">
          <div className="calendar">
            {this.renderHeader()}
            {this.renderDaysOfWeek()}
            <Days
              currentDate={this.props.calendar.currentDate}
              selectedDate={this.props.calendar.selectedDate}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(
  mapStateToProps,
  { prevMonth, nextMonth },
)(Calendar);
