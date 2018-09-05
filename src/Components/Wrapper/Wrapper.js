import React from 'react';
import {Browser as Router, Switch, Route } from 'react-router-dom';
import {BookingNoteAndReceipt} from "../BookingNoteAndReceipt/BookingNoteAndReceipt";
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
                    path="/bookingReceipt"
                    component={BookingNoteAndReceipt}
                />
            </Switch>
        </Router>
    );
}