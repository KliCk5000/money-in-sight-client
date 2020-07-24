import React, { Component } from "react";
import { connect } from "react-redux";

import Calendar from "./Calendar";
import Transactions from "./Transactions";
import AddTransactionForm from "./AddTransactionForm";

import { addTransaction } from "../actions";

import "../stylesheets/fullcalendar/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

class MainPage extends Component {
  state = {};

  addTransactionSubmit = values => {
    let selectedDate = this.props.calendar.selectedDate;
    // We need to add the currently selected date to transaction
    let completedTransaction = Object.assign({}, values, {
      date: selectedDate
    });

    this.props.addTransaction(completedTransaction);
  };

  render() {
    return (
      <div>
        <main role="main">
          {/* <Calendar className="calendar" /> */}
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
          <Transactions />
          <AddTransactionForm onSubmit={this.addTransactionSubmit} />
        </main>
        <footer role="contentinfo">Created by Nick Dean</footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { addTransaction })(MainPage);
