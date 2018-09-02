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
    }

    handleDuplicatePiece(id) {

        const { piecesData } = this.state;
        let piecesDataClone = _.cloneDeep(piecesData);
        let pieceToDuplicate;

        Promise.resolve(_.cloneDeep(_.find(piecesDataClone, pieceData => pieceData.id === id)))

            //
            .then(pieceData => {
                console.log(pieceData);
                pieceData.id = _.uniqueId();
                pieceToDuplicate = pieceData;
                return Promise.resolve(_.findIndex(piecesDataClone, pieceToDuplicate));
            })

            // This adds another piece to the View
            .then(indexOfPieceToDuplicate => {
                piecesDataClone.splice(indexOfPieceToDuplicate - 1 , 0, pieceToDuplicate);
                piecesDataClone.join();
                return Promise.resolve(piecesDataClone);
            })

            // This removes it from the state
            .then(piecesData => {
                return Promise.resolve(this.setState({piecesData}));
            })


        console.log('inside duplicate function ' + id);


    }

    render() {

        var { isLooselyPacked, piecesData } = this.state;

        const { handleDuplicatePiece } = this;

        return(
            <Grid className='one column center aligned blue' container>
                <Grid.Column width={12}>
                    <Form className="blue">
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
                                    />
                                </Grid.Row>);
                            })
                        }

                    </Form>

                </Grid.Column>
            </Grid>
        );
    }
}
