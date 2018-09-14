import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {BookingList} from "../BookingList/BookingList";
import {BookingsAndCollections} from "../BookingAndCollections/BookingsAndCollections";
import BookingReceipt from "../BookingList/BookingReceipt";
import CollectionNote from "../CollectionNote/CollectionNote";

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

                <Route
                 path="/collectionNote"

                  render={props => <CollectionNote { ...props } /> }
                />

            </Switch>
        </Router>
    );
}