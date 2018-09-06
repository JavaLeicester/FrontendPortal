import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {BookingList} from "../BookingNoteAndReceipt/BookingList";
import {BookingsAndCollections} from "../BookingAndCollections/BookingsAndCollections";

export default function Wrapper(props) {

    const { errorHandler } = props;
    return (
        <Router>
            <Switch>
                <Route
                  exact
                  path="/"
                  render={props => <BookingsAndCollections { ...props} errorHandler={errorHandler}/> }
                />

                <Route
                  path="/bookingList"
                  component={BookingList}
                />
            </Switch>
        </Router>
    );
}