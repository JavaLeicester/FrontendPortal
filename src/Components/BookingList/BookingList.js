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

        this.handleGenerateReceipt = this.handleGenerateReceipt.bind(this);
        this.handleGenerateCollection = this.handleGenerateCollection.bind(this);
    }

    componentDidMount() {

        const { bookingReceipts } = this.state;

        this.setState({
            loading: true
        });

        const options = [];

        // 46.101.34.160
        axios.get('http://localhost:8083/api/bookings')
            .then(response => _.map(response.data, (booking) => {

                const option = {
                    id: booking.id,
                    bookingDate: booking.bookingDate,
                    city: booking.city,
                    customerName: booking.customerName,
                    bookingTimeFrom: booking.bookingTimeFrom,
                    mobile: booking.mobile,
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
                    postcode: booking.postCode,
                    pieceData: booking.piecesData,

                    // Receiver Details
                    receiverName: booking.receiverName,
                    receiverContactNumber: booking.receiverContactNumber,
                    receiverHouseNumber: booking.receiverHouseNumber,
                    receiverStreet: booking.receiverStreet,
                    receiverPostCode: booking.receiverPostCode,
                    receiverCity: booking.receiverCity

                };

                console.log(option.pieceData);

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

    handleGenerateReceipt(event, { name, value }) {

        const { bookingReceipts } = this.state;

        var objecta =  _.find(bookingReceipts,function(q) { return q.id === name });

        alert(JSON.stringify(objecta, null, 4));

        this.props.history.push({
            pathname: '/collectionReceipt',
            state: { objecta }
        });

    }

    handleGenerateCollection(event, { name, value }) {

        const { bookingReceipts } = this.state;

        alert(JSON.stringify(objecta, null, 4));

        var objecta =  _.find(bookingReceipts,function(q) { return q.id === name });

        console.log(objecta);

        alert(objecta);

        this.props.history.push({
             pathname: '/collectionNote',
             state: { objecta }
        });
    }

    render() {

        // Properties
        const { bookingReceipts, loading } = this.state;

        // Functions
        const { handleGenerateCollection, handleGenerateReceipt } = this;

        return(

            <Grid className='ui fluid one column center aligned justified' className="bookingBackground" container verticalAlign='middle'>
                <Header> Booking list </Header>

                    { _.map(bookingReceipts, bookingReceipt => {
                        return (

                            <BookingReceipt
                                { ...bookingReceipt }
                                onClick={ handleGenerateCollection }
                                passedFunction={ handleGenerateReceipt }

                            />
                        );
                    })}

                <Dimmer active={loading}>
                    <Loader />
                </Dimmer>
            </Grid>

        );
    }

}
