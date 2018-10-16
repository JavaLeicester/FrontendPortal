import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = (props) => (

    <input
        type={ props.type}
        label= {props.label}
        name={props.name}
        onChange={ props.method }
        checked={props.checked}
    />

);

CheckBox.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool
};

export default CheckBox;