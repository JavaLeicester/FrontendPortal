import './BookingList.css';
import _ from 'lodash';
import Booking from '../../domain/Booking';
import React, { Component } from 'react';
import BookingReceipt from './BookingReceipt'
import { Grid, Header, Container } from 'semantic-ui-react';

export class BookingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookingReceipts: [],
        };
    }

    componentDidMount() {

        const { bookingReceipts } = this.state;

          //  customerName, houseNumber, street, postcode, city, specialInstructions,
         //   generalDescription, isHazardousGoods, isLooselyPacked,
          //  bookingDate, bookingTime, piecesData) {

        const newBooking = new Booking(
                "custom", "hou", "street", "postcode", "city", "specialinstructions",
                "generalDe", "isHazard", "isLooslyPacked", "BookingDate", "Bok"

        );

        const newBookingTwo = new Booking(
            "custom", "hou", "street", "postcode", "city", "specialinstructions",
            "generalDe", "isHazard", "isLooslyPacked", "BookingDate", "Bok"

        );

        const newBookingThree = new Booking(
            "custom", "hou", "street", "postcode", "city", "specialinstructions",
            "generalDe", "isHazard", "isLooslyPacked", "BookingDate", "Bok"

        );

        bookingReceipts.push(newBooking);
        bookingReceipts.push(newBookingTwo);
        bookingReceipts.push(newBookingThree);


        this.setState(bookingReceipts);
    }


    render() {

        const { bookingReceipts} = this.state;

        return(
            <Grid className='ui fluid one column center aligned justified' className="bookingBackground" container verticalAlign='middle'>
                <Header>Booking list </Header>


                    { _.map(bookingReceipts, bookingReceipt => {
                        return (
                            <BookingReceipt/>

                        );
                    })}

            </Grid>

        );
    }

}
