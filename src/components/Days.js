import React from 'react';
import dateFns from 'date-fns';

import '../stylesheets/Days.css';

function Days(props) {
  let { currentDate, selectedDate } = props;
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
      formatedDateToRender = dateFns.format(dayIteration, dayFormat);
      // const cloneDay = dayIteration;

      // Is date not the current month?
      let currentMonthCssClass = dateFns.isSameMonth(dayIteration, monthStart)
        ? 'current-month'
        : 'not-current-month';
      days.push(
        <div
          className={`day ${currentMonthCssClass}`}
          key={`day ${dayIteration}`}
        >
          {formatedDateToRender}
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

export default Days;
