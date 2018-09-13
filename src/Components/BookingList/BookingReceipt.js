import React from 'react';
import './BookingReceipt.css';
import { Card, Grid, Image, Button, Divider } from 'semantic-ui-react';

class BookingReceipt extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        const {
                customerName,
                houseNumber,
                key,
                bookingDate,
                city,
                bookingTimeFrom,
                bookingTime,
                staffName,
                type,
                specialInstructions,
                generalDescription,
                isHazardousGoods,
                isLooselyPacked,
                product,
                postcode
        } = this.props;

        return (

            <Grid.Row>
                <Grid.Column className="background">
                    <Card.Content>
                        <Image floated='right' size='mini'
                               src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'/>
                        <Card.Header> Booking made by :<strong>  { staffName } </strong></Card.Header>
                        <Card.Meta> </Card.Meta>
                        <Card.Description>
                            Collection between <strong> { bookingTimeFrom } </strong >and <strong> { bookingTime }</strong>
                            <strong>  </strong>
                        </Card.Description>
                        <Card.Description>
                            Collection Date:
                            <strong> { bookingDate } </strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui three buttons'>
                            <Button basic color='green'>
                                Booking Complete

                            </Button>
                            <Button primary>
                                Generate Collection Note
                                { houseNumber}
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
}

export default BookingReceipt;
