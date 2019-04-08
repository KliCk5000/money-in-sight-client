import React, { Component } from 'react';

import '../stylesheets/Calendar.css';

import Days from './Days';

class Calendar extends Component {
  state = {
    month: 'April',
  };

  renderHeader() {
    return <div>{this.state.month}</div>;
  }

  renderDaysOfWeek() {
    const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    let dayJSX = dayNames.map((dayName) => {
      return <div className="dayOfWeek" key={dayName}>{dayName}</div>;
    });
    return <div className="dayOfWeek-container">{dayJSX}</div>;
  }

  render() {
    return (
      <div>
        <div className="calendar-container">
          <div className="calendar">
            {this.renderHeader()}
            {this.renderDaysOfWeek()}
            <Days />
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
