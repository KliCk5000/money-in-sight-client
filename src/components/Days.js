import React from 'react';

import '../stylesheets/Days.css';

function Days() {
  let rows = [];
  let days = [];
  let currentDay = 1;

  for (let i = 0; i < 5; i++) {
    for (let i = 0; i < 7; i++) {
      days.push(<div className="day" key={'day'+i}>{currentDay}</div>);
      currentDay = currentDay + 1;
    }
    rows.push(<div className="row" key={'row'+i}>{days}</div>);
    days = [];
  }

  return <div className="day-container">{rows}</div>;
}

export default Days;
