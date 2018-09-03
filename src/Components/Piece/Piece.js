import './Piece.css';
import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export class Piece extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        // id comes from pieceData.id
        const { id, weight, length, width, height } = this.props;
        const { handleDelete, handleDuplicate} = this.props;

        console.log("The property is ... ");
        console.log(this.props);

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

                <Button
                    content="Add"
                    className="blue large"
                    onClick={(event) => {
                        event.preventDefault();
                        handleDuplicate(id, weight, length, width, height);
                    }}
                />
                <Button
                    content="Delete"
                    className="red large"
                    onClick={(event) => {
                        event.preventDefault();
                        handleDelete(id);
                    }}
                />

            </Form.Group>

        );
    }
}
