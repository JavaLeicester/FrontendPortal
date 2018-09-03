import _ from 'lodash';
import './BookingsAndCollections.css';
import { Piece } from '../Piece/Piece';
import React, { Component } from 'react';
import { Grid, Form, Segment, Input, Header, Divider, Select, TextArea, Button } from 'semantic-ui-react';
import { bookingAndCollectionModel } from '../../domain/';

export class BookingsAndCollections extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLooselyPacked: [{key: "yes", text: "yes"}, {key: "no", text: "no"}],
            piecesData:[new bookingAndCollectionModel()]
        };

        this.handleDuplicatePiece = this.handleDuplicatePiece.bind(this);
        this.handleDeletePiece = this.handleDeletePiece.bind(this);
        this.handlePieceDataChange = this.handlePieceDataChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleDeletePiece(id) {

        // Get the current list of pieces
        const { piecesData } = this.state;

        // Do nothing if only one piece displaying
        if (piecesData.length === 1) {

            // Do nothing. Later on data a notification

        // If there is more than one then remove from the array
        } else {
            var modifiedArray = _.remove(piecesData, (onePiece) => onePiece.id === id);
            this.setState({piecesData: piecesData });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleDuplicatePiece(id, weight, length, width, height) {

        console.log("The results are the following: .... ");
        console.log(id, weight, length, width, height);

        const { piecesData } = this.state;
        let piecesDataClone = _.cloneDeep(piecesData);
        let pieceToDuplicate;

        Promise.resolve(_.cloneDeep(_.find(piecesDataClone, pieceData => pieceData.id === id)))

            // pieceData the variable that we pass in is equivalent to the cloning of the
            // match
            .then(pieceData => {

                // Keep the fields the same increment the id value
                pieceData.id = _.uniqueId();
               
                pieceToDuplicate = pieceData;
                return Promise.resolve(_.findIndex(piecesDataClone, pieceToDuplicate));
            })

            // This adds another piece to the View
            .then(indexOfPieceToDuplicate => {

                console.log("index of piece to duplicate");
                console.log(indexOfPieceToDuplicate);
                piecesDataClone.splice(indexOfPieceToDuplicate - 1 , 0, pieceToDuplicate);

               // piecesDataClone.join();
                console.log(piecesDataClone);
                return Promise.resolve(piecesDataClone);
            })

            // This removes it from the state
            .then(piecesData => {

                return Promise.resolve(this.setState({piecesData}));
            })
    }

    handlePieceDataChange(id, nameOfField, valueOfField) {

        const { piecesData } = this.state;

        Promise.resolve(_.find(piecesData, matchApiece => {
            return matchApiece.id === id;
        }))
            .then(pieceToUpdate => {
                pieceToUpdate[nameOfField] = valueOfField;
                this.setState({piecesDatas:piecesData });
                return Promise.resolve("updated successfully!");
            })
            // Test function
            .then ( value => {
                console.log("INSIDE THEN: " + value);
                console.log("Array List is here: ");
                console.log(this.state.piecesData);

             })
    }

    render() {

        var { isLooselyPacked, piecesData } = this.state;

        // Get the functions from this.state
        const {
            handleDuplicatePiece,
            handleDeletePiece,
            handlePieceDataChange
        } = this;

        return(
            <Grid className='one column center aligned blue' container>
                <Grid.Column width={12}>
                    <Form onSubmit={this.handleSubmit} className="blue">
                        <Segment className='raised small'>
                            Collection Call
                        </Segment>

                        <Header>
                            Collection Data
                        </Header>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={Input}
                                name='customerName'
                                placeholder='customerName'
                                label="Customer name"

                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={Input}
                                name='houseNumber'
                                placeholder='houseNumber'
                                label="House number"
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={Input}
                                name='street'
                                placeholder='street'
                                label="street"
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={Input}
                                name='postcode'
                                placeholder='postcode'
                                label="postcode"
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={Input}
                                name='City'
                                placeholder='City'
                                label="City"
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={ TextArea }
                                name="specialInstructions"
                                placeholder="Special Instructions For Delivery"
                                label="Special instructions for Delivery"
                            />
                        </Form.Group>

                        <Divider />

                        <Header> Parcel Information </Header>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={ TextArea }
                                label="General description of Goods"
                                placeholder="General description of Goods"
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Radio
                                label='Tick, if parcel loosely packed!'
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Radio
                                label='Tick, if parcel/s contain hazardous goods (e.g. perfumes)'
                            />
                        </Form.Group>

                        <Divider />

                        { _.map(piecesData, pieceData => {
                            return(
                                <Grid.Row key={pieceData.id}>
                                    <Piece
                                        {...pieceData}
                                        handleDuplicate={ handleDuplicatePiece }
                                        handleChange={ handlePieceDataChange }
                                        handleDelete={ handleDeletePiece }
                                    />
                                </Grid.Row>);
                            })
                        }

                        <Button
                            content="Create a booking and collection"
                            className="red small"
                        />

                    </Form>

                </Grid.Column>
            </Grid>
        );
    }
}
