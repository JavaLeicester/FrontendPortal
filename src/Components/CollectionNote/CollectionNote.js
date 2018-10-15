import React from 'react';
import _ from 'lodash';
import { Grid, Header, Menu, Image, Container, List } from 'semantic-ui-react';

class CollectionNote extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };
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
                pieceData,
                chargeableWeight,
                mobile
        } = this.props.location.state.objecta;

        return(
            <Container>

                <Header> Collection Note </Header>

                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <List>
                                <List.Item> <strong>Booking Date:</strong> { bookingDate } </List.Item>
                                <List.Item> <strong>Booking Time From:</strong> { bookingTimeFrom} </List.Item>
                                <List.Item> <strong>Booking Time To:</strong> { bookingTimeTo } </List.Item>

                                <br />
                                <br />

                                <List.Item><strong>Product:</strong> {product} </List.Item>

                                <List.Item><strong>Type:</strong> {type} </List.Item>

                            </List>
                        </Grid.Column>

                        <Grid.Column>
                              <Header> Collection Details </Header>
                              <List>
                                  <List.Item as="ul">
                                      <List.Item as='li'> <strong> Name: </strong> { customerName } </List.Item>
                                      <List.Item as='li'> <strong> Number: </strong> { mobile } </List.Item>
                                  </List.Item>
                              </List>

                              <List>
                                    <List.Item as="ul">
                                        <strong> Address: </strong>
                                        <List.Item as='li'> { street } </List.Item>
                                        <List.Item as='li'> { postcode } </List.Item>
                                        <List.Item as='li'> { city } </List.Item>
                                    </List.Item>
                              </List>
                        </Grid.Column>

                        <Grid.Column>
                            <Header> Receiver Details </Header>
                            <strong> To: { } </strong>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid className='one column center aligned blue' relaxed='very' container columns={8} celled>
                    <Grid.Row>
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
                            Chargeable Weight
                        </Grid.Column>

                        <Grid.Column>
                            Additional Info
                        </Grid.Column>

                    </Grid.Row>


                    { _.map(pieceData, g => {

                        return(
                            <Grid.Row>

                                <Grid.Column>
                                    { g.id = _.uniqueId() }
                                </Grid.Column>

                                <Grid.Column>
                                    { g.weight}
                                </Grid.Column>

                                <Grid.Column>
                                    { g.length }
                                </Grid.Column>

                                <Grid.Column>
                                    { g.width}
                                </Grid.Column>

                                <Grid.Column>
                                    { g.height}
                                </Grid.Column>

                                <Grid.Column>
                                    { g.volumeWeight }
                                </Grid.Column>

                                <Grid.Column>
                                    { g.chargeableWeight }
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
