import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Message, Transition, Header } from 'semantic-ui-react';

const Notification = (props) => (
    <Grid.Column width={16} className='left attached notification transparent'>
        <Transition.Group duration={2000} animation='fly left'>
          {
            props.isShowNotification &&
            <Message
                className={props.styling}
                header={props.title}
                content={props.message}
            />
          }
        </Transition.Group>
    </Grid.Column>
);

Notification.propTypes = {
    styling: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    showError: PropTypes.bool,
};

export default Notification;
