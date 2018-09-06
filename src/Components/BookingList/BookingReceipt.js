import React from 'react';
import './BookingReceipt.css';
import { Card, Grid, Image, Button, Divider } from 'semantic-ui-react';

const BookingReceipt = (props) => {

    return (

        <Grid.Row>
            <Grid.Column className="background">
                <Card.Content>
                    <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                    <Card.Header> Booking made by:  </Card.Header>
                    <Card.Meta> </Card.Meta>
                    <Card.Description>
                        <strong> Collection time: </strong>
                        <strong>  </strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui three buttons'>
                        <Button basic color='green'>
                            Booking Complete
                        </Button>
                        <Button primary>
                            Generate Collection Note
                        </Button>
                        <Button secondary>
                            Generate Collection Receipt
                        </Button>

                    </div>
                </Card.Content>
            </Grid.Column>
        </Grid.Row>

    );

};

export default BookingReceipt;
