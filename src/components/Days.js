import React from 'react';

import '../stylesheets/Days.css';

function Days() {
  let rows = [];
  let days = [];
  let currentDay = 1;

  for (let i = 0; i < 5; i++) {
    for (let i = 0; i < 7; i++) {
      days.push(<div className="day">{currentDay}</div>);
      currentDay = currentDay + 1;
    }
    rows.push(<div className="row">{days}</div>);
    days = [];
  }

  return <div>{rows}</div>;
}

export default Days;
