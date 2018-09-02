import './Piece.css';
import React from 'react';
import { Form } from 'semantic-ui-react';

export class Piece extends React.Component {

    render() {

        return(

            <Form.Group widths='equal'>
                <Form.Input
                    name='weight'
                    placeholder='weight (kgs)'
                    label="Weight (kgs)"
                />
                <Form.Input
                    name='length'
                    placeholder='length (cm)'
                    label="Length (cm)"
                />
                <Form.Input
                    name='width'
                    placeholder='width (cm)'
                    label="Width (cm)"
                />
                <Form.Input
                    name='height'
                    placeholder='height (cm)'
                    label="Height (cm)"
                />


            </Form.Group>

        );
    }
}
