import './BookingsAndCollections.css';
import { Piece } from '../Piece/Piece';
import React, { Component } from 'react';
import { Grid, Form, Segment, Input, Header, Divider, Select, TextArea, Button } from 'semantic-ui-react';

export class BookingsAndCollections extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLooselyPacked: [{key: "yes", text: "yes"}, {key: "no", text: "no"}],
        };

    }

    render() {

        var { isLooselyPacked } = this.state;

        return(
            <Grid className='one column center aligned blue' container>
                <Grid.Column width={12} class="form">
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

                        <Grid.Row>
                            <Piece />
                        </Grid.Row>

                        <Divider className="black" />

                        <Button
                            content='Confirm Collection'
                        />

                    </Form>

                </Grid.Column>
            </Grid>
        );
    }
}
