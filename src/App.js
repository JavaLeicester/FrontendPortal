import './App.css';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import {BookingsAndCollections} from "./Components/BookingAndCollections/BookingsAndCollections";

class App extends React.Component {
  render() {
    return (
        <BookingsAndCollections />
    );
  }
}

export default App;
