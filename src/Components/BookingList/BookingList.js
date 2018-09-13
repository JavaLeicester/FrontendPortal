import _ from 'lodash';
import axios from 'axios';
import './BookingList.css';
import React, { Component } from 'react';
import Booking from '../../domain/Booking';
import BookingReceipt from './BookingReceipt';
import { getBooking } from "../ApiClient/ApiClient";
import { Grid, Header, Container, Dimmer, Loader } from 'semantic-ui-react';

export class BookingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookingReceipts: [],
            loading: false
        };
    }

    componentDidMount() {

        const { bookingReceipts } = this.state;

        this.setState({
            loading: true
        });

        const options = [];

        axios.get('http://localhost:8080/api/bookings')
            .then(response => _.map(response.data, (booking) => {

                const option = {
                    key: booking.id,
                    bookingDate: booking.bookingDate,
                    city: booking.city,
                    customerName: booking.customerName,
                    bookingTimeFrom: booking.bookingTimeFrom,
                    // Future fix booking.bookingTimeTo is undefined had to use bookingTime though elsewhere I use bookingTimeTo
                    bookingTimeTo: booking.bookingTime,
                    staffName: booking.staffName,
                    type:booking.type,
                    specialInstructions: booking.specialInstructions,
                    generalDescription: booking.generalDescription,
                    houseNumber: booking.houseNumber,
                    isHazardousGoods: booking.isHazardousGoods,
                    isLooselyPacked: booking.isLooselyPacked,
                    product: booking.product,
                    postcode: booking.postcode,

                };

                options.push(option);
            }))
            .then(() => {
                this.setState({
                    loading: false,
                    bookingReceipts: options,
                });
            })
            .catch(error => console.log(error));
    }

    render() {

        const { bookingReceipts, loading } = this.state;

        return(

            <Grid className='ui fluid one column center aligned justified' className="bookingBackground" container verticalAlign='middle'>
                <Header>Booking list </Header>

                    { _.map(bookingReceipts, bookingReceipt => {
                        return (
                            <BookingReceipt { ...bookingReceipt }/>

                        );
                    })}

                <Dimmer active={loading}>
                    <Loader />
                </Dimmer>
            </Grid>

        );
    }

}
