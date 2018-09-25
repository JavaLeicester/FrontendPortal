import React from 'react';
import Calendar from 'react-calendar';
import './ReactCalendar.css';

const ReactCalendar = (props) =>  (

    <Calendar
        onChange = { props.onChange }
        value = { props.bookingDate }
        className="horizontal middle aligned calendar"
    />

)

export default ReactCalendar;
