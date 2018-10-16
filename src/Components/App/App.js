import './App.css';
import _ from 'lodash';
import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Grid } from 'semantic-ui-react';
import { Notification } from  '../Common';
import Wrapper from '../Wrapper/Wrapper';

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
      }

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
        setTimeout(this.clearNotification, duration)
    }


    showNotification(styling, message, title) {
        let isShowNotification = true;
        const notification = { isShowNotification, styling, message, title };
        this.setState({notification})
    }

    render() {
      const { notification } = this.state;
      return (
            <Grid>
                <Notification {...notification } />
                <Wrapper errorHandler={this.handleError} />
            </Grid>
        );
    }

}

export default App;
