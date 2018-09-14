import React from 'react';
import _ from 'lodash';
import { Grid, Header, Menu, Image, Container, List } from 'semantic-ui-react';

class CollectionNote extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };

        console.log("THe stae");
        console.log(this.props.location.state);

    }

    render() {

        const { bookingDate,
                bookingTimeFrom,
                bookingTimeTo,
                city,
                customerName,
                generalDescription,
                houseNumber,
                postcode,
                product,
                type,
                street,
                pieceData
        } = this.props.location.state.objecta;


        return(
            <Container>

                <List>
                    <List.Item> <strong>BookingDate:</strong> { bookingDate } </List.Item>
                    <List.Item> <strong>BookingTimeFrom:</strong> {bookingTimeFrom} </List.Item>
                    <List.Item> <strong>BookingTimeTo:</strong> { bookingTimeTo } </List.Item>

                    <List.Item as='ul'>
                        <strong> Address: </strong>
                        <List.Item as='li'> { street } </List.Item>
                        <List.Item as='li'>{ postcode } </List.Item>
                        <List.Item as='li'> { city } </List.Item>
                    </List.Item>

                    <List.Item><strong>Product:</strong> {product} </List.Item>

                    <List.Item><strong>Type:</strong> {type} </List.Item>

                </List>



                <Grid className='one column center aligned blue' relaxed='very' container columns={8}>
                    <Grid.Column>
                         Piece Number
                    </Grid.Column>

                    <Grid.Column>
                         Actual Weight
                    </Grid.Column>

                    <Grid.Column>
                        length
                    </Grid.Column>

                    <Grid.Column>
                        Width
                    </Grid.Column>

                    <Grid.Column>
                        Height
                    </Grid.Column>

                    <Grid.Column>
                        Volume Weight
                    </Grid.Column>

                    <Grid.Column>
                        Charged Weight
                    </Grid.Column>

                    <Grid.Column>
                        Additional Info
                    </Grid.Column>


                    { _.map(pieceData, g => {

                        console.log("G is ");
                        console.log(g);

                        return(
                            <Grid.Row>

                                <Grid.Column>
                                </Grid.Column>

                                <Grid.Column>
                                </Grid.Column>

                                <Grid.Column>
                                   { g.length }
                                </Grid.Column>

                                <Grid.Column>

                                </Grid.Column>

                            </Grid.Row>
                        );
                    })}

                </Grid>

            </Container>

        );
    }

}


export default CollectionNote;
