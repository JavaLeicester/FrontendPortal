import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

export default function ValidationError(props) {
    const { validationErrors } = props;

    return (
        <Grid className="ui error column center aligned" container columns={3}>
            <Grid.Column>
                {_.map (validationErrors, error =>
                    <Grid.Row className='validation-error' key={error.key}>
                        * { error.message }
                    </Grid.Row>
                )}
            </Grid.Column>
        </Grid>
    );
}

ValidationError.propTypes = {
    validationErrors: PropTypes.object,
};
