import './Piece.css';
import React from 'react';
import { Form, Button, Dropdown, Header } from 'semantic-ui-react';

export class Piece extends React.Component {

    pieceType=[
        {
          text:"carton",
          value:"carton"
        },
        {
          text:"Suit case",
          value:"suitCase"
        },
        {
          text:"Barrel",
          value:"barrel"
        },
        {
          text:"Loose Items",
          value:'looseItems'
        },
        {
          text: "TV",
          value: 'tv'
        },
        {
          text:"Fragile Item",
          value:"fragileItem"
        }
    ]

    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this);

    }

    onUpdate(event, {name, value}) {

        const { handleChange, id } = this.props;
        event.preventDefault();
        handleChange(id, name, value);
    }

    render() {

        // id comes from pieceData.id
        const { id, weight, length, width, height } = this.props;

        const { onUpdate } = this;

        // Functions
        const { handleDelete, handleDuplicate } = this.props;

        return(

            <Form.Group widths=''>
                <Form.Input
                    name='weight'
                    placeholder='weight (kgs)'
                    label="Weight (kgs)"
                    onChange={onUpdate}
                />
                <Form.Input
                    name='length'
                    placeholder='length (cm)'
                    label="Length (cm)"
                    onChange={onUpdate}
                />
                <Form.Input
                    name='width'
                    placeholder='width (cm)'
                    label="Width (cm)"
                    onChange={onUpdate}
                />
                <Form.Input
                    name='height'
                    placeholder='height (cm)'
                    label="Height (cm)"
                    onChange={onUpdate}
                />

                <Form.Dropdown
                        name="pieceType"
                        placeholder='Select a piece Type'
                        fluid selection
                        options={this.pieceType}
                        onChange={onUpdate}
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
