import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {BookingList} from "../BookingList/BookingList";
import {BookingsAndCollections} from "../BookingAndCollections/BookingsAndCollections";
import CollectionNote from "../CollectionNote/CollectionNote";
import CollectionReceipt from "../CollectionReceipt/CollectionReceipt";

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

                <Route
                    path="/collectionReceipt"
                    render={props => <CollectionReceipt { ...props } /> }
                />

            </Switch>
        </Router>
    );
}