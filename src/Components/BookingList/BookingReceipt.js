import React from 'react';
import './BookingReceipt.css';
import { Card, Grid, Image, Button } from 'semantic-ui-react';

const BookingReceipt = (props) => (
    <Grid.Row>
        <Grid.Column className="background">
            <Card.Content>
                <Image floated='right' size='mini'
                       src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'/>
                <Card.Header> Booking made by :<strong>  { props.staffName } </strong></Card.Header>
                <Card.Meta> </Card.Meta>
                <Card.Description>
                    Collection Time Between: <strong> { props.bookingTimeFrom } </strong > and <strong> { props.bookingTimeTo }</strong>
                    <strong>  </strong>
                </Card.Description>
                <Card.Description>
                    Collection Date:
                    <strong> { props.bookingDate } </strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui three buttons'>
                    <Button basic color='green'>
                        Booking Complete

                    </Button>
                    <Button primary
                            name={props.id}
                            onClick={props.onClick }
                    >
                        Generate Collection Note

                    </Button>
                    <Button secondary
                            name={props.id}
                            onClick={ props.passedFunction }
                    >
                        Generate Collection Receipt
                    </Button>
                </div>
            </Card.Content>
        </Grid.Column>
    </Grid.Row>

);

export default BookingReceipt;

/*    constructor(props) {
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
                bookingTimeTo,
                staffName,
                type,
                specialInstructions,
                generalDescription,
                isHazardousGoods,
                isLooselyPacked,
                product,
                postcode
        } = this.props;

        //Function
        const { onClick } = this.props;

        return (



        );
    };
}

export default BookingReceipt;*/
