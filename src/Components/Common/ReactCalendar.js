import React from 'react';
import Calendar from 'react-calendar';

const ReactCalendar = (props) =>  (

    <Calendar
        onChange = { props.onChange }
        value = { props.bookingDate }
        className="horizontal middle aligned"
    />

)

export default ReactCalendar;
