import React, { Component } from 'react';

import '../stylesheets/Calendar.css';

// import Days from './Days';

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
    console.log(dayJSX);
    return <div>{dayJSX}</div>;
  }

  render() {
    return (
      <header role="banner">
        <h1>Calendar View</h1>
        <div className="calendar-container">
          Here is my calendar
          <div className="calendar">
            {this.renderHeader()}
            {this.renderDaysOfWeek()}
          </div>
        </div>
      </header>
    );
  }
}

export default Calendar;
