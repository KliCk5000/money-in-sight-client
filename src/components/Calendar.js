import React, { Component } from 'react';
import dateFns from 'date-fns';
import { connect } from 'react-redux';
import { prevMonth, nextMonth } from '../actions';

import '../stylesheets/Calendar.css';

import Days from './Days';

class Calendar extends Component {

  renderHeader() {
    const headerDateFormat = "MMM YYYY";
    return (
    <div> 
      <div onClick={() => this.props.prevMonth(this.props.currentDate)}>Click here for Previous Month</div>
      {dateFns.format(this.props.currentDate, headerDateFormat)}
      <div onClick={() => this.props.nextMonth(this.props.currentDate)}>Click here for Next Month</div>
    </div>);
  }

  renderDaysOfWeek() {
    const daysOfWeekFormat = "ddd";
    let startDateOfTheWeek = dateFns.startOfWeek(this.props.currentDate);
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

  render() {
    return (
      <div>
        <div className="calendar-container">
          <div className="calendar">
            {this.renderHeader()}
            {this.renderDaysOfWeek()}
            <Days
              currentDate={this.props.currentDate}
              selectedDate={this.props.selectedDate}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.calendar;
}

export default connect(mapStateToProps, { prevMonth, nextMonth })(Calendar);
