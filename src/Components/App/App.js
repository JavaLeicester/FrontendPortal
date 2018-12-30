import './App.css';
import _ from 'lodash';
import React from 'react';
import 'semantic-ui-css/semantic.css';

import Home from '../../Home';
import login from '../../Components/Login';
import SignUp from '../../Components/SignUp';

import {BrowserRouter as Router, Route } from 'react-router-dom';

import app from "../../base";


import PrivateRoute from "../../PrivateRoute";

class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        notification: {
          title: '',
          styling: '',
          isShowNotification: false,
          message: '',
        },
        authenticated: false,
        user: null,
        loading: true
      };

      this.handleError = this.handleError.bind(this);
      this.showNotification = this.showNotification.bind(this);
      this.clearNotification = this.clearNotification.bind(this);

    };

    clearNotification() {
      const { notification } = this.state;
      notification.isShowNotification = false;
      this.setState({notification});
    }

    handleError(error, duration=5000) {

        let { title, message, styling } = error;

        if (_.isUndefined(title) || _.isEmpty(title)) {
            title="Unknown Error";
        }

        if (_.isUndefined(message) || _.isEmpty(message) || _.isNil(message) || _.isNull(message)) {
            message="Unknown message occurred";
        }

        if (_.isUndefined(styling) || _.isEmpty(styling) || _.isNil(styling) || _.isNull(styling)) {
            styling='red';
        }

        this.showNotification(styling, message, title);
        setTimeout(this.clearNotification, duration);
    }


    showNotification(styling, message, title) {
        let isShowNotification = true;
        const notification = { isShowNotification, styling, message, title };
        this.setState({notification})
    }

    componentWillMount() {
        app.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                    currentUser: user,
                    loading: false
                });
            } else {
                this.setState({
                    authenticated:false,
                    currentUser:null,
                    loading: false

                });
            }
        });
    }

    render() {

      // const { notification } = this.state;

      const { authenticated, loading } = this.state;

      if (loading) {
          return <p> Loading ... </p>;
      }

      /*<Route exact path="/" component={Home} />*/

      return (
          <Router>
              <div>
                <PrivateRoute
                    exact
                    path="/"
                    component={Home}
                    authenticated={authenticated}
                />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={SignUp} />

              </div>
          </Router>

           /* df<Grid>
                <Notification {...notification } />
                <Wrapper errorHandler={this.handleError} />
            </Grid>
            */
        );
    }

}

export default App;
