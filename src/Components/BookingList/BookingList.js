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

        axios.get('http://localhost:8081/api/bookings')
            .then(response => _.map(response.data, (booking) => {

                const option = {
                    id: booking.id,
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
                    postcode: booking.postCode,
                    pieceData: booking.piecesData
                };

                console.log("The pieceData is ");
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

        this.props.history.push({
            pathname: '/collectionReceipt',
            state: { objecta }
        });

    }

    handleGenerateCollection(event, { name, value }) {

        const { bookingReceipts } = this.state;

        console.log("oooooooooooooo");
        console.log(name);
        console.log("tHE VALUE IS");
        console.log(value);

        console.log("The booking receipts are: ");
        console.log(bookingReceipts);

        var objecta =  _.find(bookingReceipts,function(q) { return q.id === name });

        console.log(objecta);

        alert(objecta);

        this.props.history.push({
             pathname: '/collectionNote',
             state: { objecta }
        });
    }



    render() {

        //Properties
        const { bookingReceipts, loading } = this.state;

        //Functions
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
