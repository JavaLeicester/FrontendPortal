import _ from 'lodash';
import './BookingsAndCollections.css';
import { Piece } from '../Piece/Piece';
import React, { Component } from 'react';
import { validateInputs, ValidationError, CheckBox } from '../Common';
import { bookingAndCollectionModel, NotificationData } from '../../domain/';
import { Grid, Form, Segment, Input, Header, Divider, Select, TextArea, Button, Checkbox, Radio, Dropdown } from 'semantic-ui-react';

import { addBooking } from "../ApiClient/ApiClient";
import Booking from "../../domain/Booking";

import moment from 'moment';
import ReactCalendar from "../Calendar/ReactCalendar";

export class BookingsAndCollections extends Component {


    constructor(props) {
        super(props);
        this.state = {
            piecesData:[new bookingAndCollectionModel()],
            customerName:'',
            contactNumber: '',
            houseNumber: '',
            street: '',
            postcode: '',
            city: '',
            specialInstructions: '',
            generalDescription: '',
            validationResult: {},
            isHazardousGoods: false,
            isLooselyPacked: false,
            bookingDate: '',
            bookingTimeTo: '',
            bookingTimeFrom: '',
            type:"",
            product:"",
            typeOptions: [
                {text: "air", value: "air"},
                {text: "sea", value: "sea"},
                {text: "courier", value: "courier"},
                {text: "packaging", value: "packaging"}
            ],
            productOptions: [],
            staffOptions: [
                { text: "Hussein", value: "Hussein" },
                { text:"Yakub", value: "Yakub"},
                { text:"Humayun", value: "Humayun"},
                { text: "Hassain", value: "Hassain"}
            ],
            staffName:""

        };


        this.handleIsLooselyPacked = this.handleIsLooselyPacked.bind(this);
        this.handleHazardousGoods = this.handleHazardousGoods.bind(this);

        this.handleDuplicatePiece = this.handleDuplicatePiece.bind(this);
        this.handleDeletePiece = this.handleDeletePiece.bind(this);
        this.handlePieceDataChange = this.handlePieceDataChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormValidation = this.handleFormValidation.bind(this);

        this.handleCustomerNameChange = this.handleCustomerNameChange.bind(this);
        this.handleHouseNumberChange = this.handleHouseNumberChange.bind(this);
        this.handleStreetChange = this.handleStreetChange.bind(this);
        this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleSpecialDeliveryChange = this.handleSpecialDeliveryChange.bind(this);

        this.handleGeneralDescriptionChange = this.handleGeneralDescriptionChange.bind(this);

        this.handleBookingDate = this.handleBookingDate.bind(this)

        this.handleBookingTimeFrom = this.handleBookingTimeFrom.bind(this);
        this.handleBookingTimeTo = this.handleBookingTimeTo.bind(this);

        this.handleContactNumber = this.handleContactNumber.bind(this);
        this.handleBookingDateTest = this.handleBookingDateTest.bind(this);

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);

        this.handleStaffNameChange = this.handleStaffNameChange.bind(this);

        this.handleGenerateCollection = this.handleGenerateCollection.bind(this);

    }


    handleHazardousGoods(event) {
        const { errorHandler } = this.props;
        const target = event.target;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const name = target.name;

        return Promise.resolve(this.setState({ [name]: value }))
            .then(() => {
                return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));
    }

    handleIsLooselyPacked(event) {
        const { errorHandler } = this.props;
        const target = event.target;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const name = target.name;

        return Promise.resolve(this.setState({ [name]: value }))
            .then(() => {
                return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));
    }

    handleBookingTimeTo(event, {name, value}){

        event.preventDefault();

        const { errorHandler } = this.props;

        return Promise.resolve(this.setState({ [name]: value }))
            .then(() => {
                return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));

    }

    handleBookingTimeFrom(event,{name, value}) {

        event.preventDefault();

        const { errorHandler } = this.props;

        return Promise.resolve(this.setState({ [name]: value }))
            .then(() => {
                    return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));

    }

    handleBookingDateTest(date) {

        const { errorHandler } = this.props;

        date = moment(date).format('DD/MM/YYYY');

        return Promise.resolve(this.setState({'bookingDate': date}))
            .then(() => {
                return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));

    }

    handleBookingDate(event, { name, value }) {

        event.preventDefault();

        const { errorHandler } = this.props;

        return Promise.resolve(this.setState({ [name]: value }))
            .then(() => {
                return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));
    }


    handleCustomerNameChange(event, { name, value}) {

        event.preventDefault();

        // errorHandler points to the parent class App in particular
        // the method handleError in the App.js class
        const { errorHandler } = this.props;
        return Promise.resolve(this.setState({ [name]: value }))
        .then(() => {
            return this.handleFormValidation();
        })
        .then() //works without the then()
        .catch(error => errorHandler(error));
    }

    handleHouseNumberChange(event, { name, value }) {

        event.preventDefault();
        const { errorHandler } = this.props;
        return Promise.resolve(this.setState({ [name] : value})) // we put in a promise.resolve as we want to do this before validating form
        .then(() => {
            return this.handleFormValidation();
        })
            .then()
            .catch(error => errorHandler(error));

    }

    handleStreetChange(event, {name, value }) {

        event.preventDefault();
        const { errorHandler } = this.props;
        return Promise.resolve(this.setState({ [name]: value }))
            .then(() => {
                return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));

    }

    handlePostCodeChange(event,{name, value}) {

        event.preventDefault();
        const { errorHandler } = this.props;
        return Promise.resolve(this.setState({[name]: value }))
            .then(() => {
                return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));

    }

    handleLooselyPackedClicked(event,{name, value}) {
        console.log("The name value is ...");
        console.log(name);
        console.log(this.state.isLooselyPacked);

        Promise.resolve(this.setState({
            isLooselyPacked : !this.state.isLooselyPacked
        })
        ).then(
            console.log(this.state.isLooselyPacked)
        );

    }

    handleCityChange(event,{name, value}) {

        event.preventDefault();
        const { errorHandler } = this.props;
        return Promise.resolve(this.setState({[name]: value}))
            .then(() => {
                return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));

    }

    handleSpecialDeliveryChange(event,{name,value}) {

        console.log(this.props);

        event.preventDefault();
        const { errorHandler } = this.props;
        return Promise.resolve(this.setState({[name]: value}))
            .then(() => {
                return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));
    }

    handleGeneralDescriptionChange(event,{name,value}) {

        console.log(this.props);

        event.preventDefault();
        const { errorHandler } = this.props;
        return Promise.resolve(this.setState({[name]: value }))
            .then(() => {
                return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));
    }

    // If comming from handlePieceDataChange, we update the pieces first
    // then once we update the indivdiual pieces we then do validation on them
    handleFormValidation() {
        return new Promise(((resolve, reject) => {

        // Get all the properties from the state
        const { customerName, contactNumber, houseNumber,
                street, postcode, city,
                specialInstructions,generalDescription, isLooselyPacked,
                piecesData, isHazardousGoods, bookingDate,
                bookingTimeTo, bookingTimeFrom, product, type, staffName
            } = this.state;

            // Pass all of the properties from the state into the InputValidator function
            validateInputs(
                           customerName,
                           contactNumber,
                           houseNumber,
                           street,
                           postcode,
                           city,
                           specialInstructions,
                           generalDescription,
                           piecesData,
                           isLooselyPacked,
                           isHazardousGoods,
                           bookingDate,
                           bookingTimeTo,
                           bookingTimeFrom,
                           product,
                           type,
                           staffName)

            // If valid the form
            // we are returned here from line 113 in InputValidator
            .then((validationResult) => {

                this.setState({validationResult});
                return resolve(validationResult);
            })

            // If not valid the form
            .catch(({validationErrors }) => {
                const { validationResult } = this.state;
                validationResult.validationErrors = validationErrors;
                this.setState({ validationResult });
                return reject(new NotificationData('red','ValidationError', 'Error in required fields'));

            });

        }))

    }

    handleDeletePiece(id) {

        // Get the current list of pieces
        const { piecesData } = this.state;

        // Do nothing if only one piece displaying
        if (piecesData.length === 1) {

            // Do nothing. Later on data a notification

        // If there is more than one then remove from the array
        } else {
            var modifiedArray = _.remove(piecesData, (onePiece) => onePiece.id === id);
            this.setState({piecesData: piecesData });
        }
    }

    handleSubmit(event) {

        event.preventDefault();
        const { errorHandler, history } = this.props;

        const { customerName, houseNumber, street, postcode, city, specialInstructions, generalDescription, isHazardousGoods, isLooselyPacked,  bookingDate, bookingTimeTo, bookingTimeFrom, piecesData, product, type, staffName } = this.state;
        const newBooking = new Booking(customerName, houseNumber, street, postcode, city, specialInstructions, generalDescription, isHazardousGoods, isLooselyPacked,  bookingDate, bookingTimeTo, bookingTimeFrom, piecesData, product, type, staffName);

        alert(JSON.stringify(this.state, null, 4));

        this.handleFormValidation()
            .then(function(result) {

                addBooking(newBooking)
                    .then(function ({result}) {

                        history.push('/bookingList');
                    })
                    .catch(function(error) {

                        history.push('/bookingList');

                        errorHandler(error)

                    });

            })
            .catch(error => errorHandler(error));

    }

    handleDuplicatePiece(id, weight, length, width, height) {

        console.log("The results are the following: .... ");
        console.log(id, weight, length, width, height);

        const { piecesData } = this.state;
        let piecesDataClone = _.cloneDeep(piecesData);
        let pieceToDuplicate;

        Promise.resolve(_.cloneDeep(_.find(piecesDataClone, pieceData => pieceData.id === id)))

            // pieceData the variable that we pass in is equivalent to the cloning of the
            // match
            .then(pieceData => {

                // Keep the fields the same increment the id value
                pieceData.id = _.uniqueId();
               
                pieceToDuplicate = pieceData;
                return Promise.resolve(_.findIndex(piecesDataClone, pieceToDuplicate));
            })

            // This adds another piece to the View
            .then(indexOfPieceToDuplicate => {

                console.log("index of piece to duplicate");
                console.log(indexOfPieceToDuplicate);
                piecesDataClone.splice(indexOfPieceToDuplicate - 1 , 0, pieceToDuplicate);

               // piecesDataClone.join();
                console.log(piecesDataClone);
                return Promise.resolve(piecesDataClone);
            })

            // This removes it from the state
            .then(piecesData => {

                return Promise.resolve(this.setState({piecesData}));
            })
    }

    // Child child Piece invokes this class as Parent passing
    // up all the relevant properties
    handlePieceDataChange(id, nameOfField, valueOfField) {

        const { errorHandler } = this.props;
        // Get the list of pieces from the State
        const { piecesData } = this.state;

        Promise.resolve(_.find(piecesData, matchApiece => {
            return matchApiece.id === id;
        }))
            // Update the piece first in the state
            .then(pieceToUpdate => {
                pieceToUpdate[nameOfField] = valueOfField;
                this.setState({piecesDatas:piecesData });
                return Promise.resolve("updated successfully!");
            })
            // Then handle the form validation
            .then(() => this.handleFormValidation())
            .catch(error => {
                errorHandler(error);
            });
    }

    handleContactNumber(event, {name,value}) {

        console.log(this.props);

        event.preventDefault();
        const { errorHandler } = this.props;
        return Promise.resolve(this.setState({[name]: value }))
            .then(() => {
                return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));
    }

     handleStaffNameChange(event,{name,value}) {

        event.preventDefault();
        const { errorHandler } = this.props;
        return Promise.resolve(this.setState({[name]: value}))
            .then(() => {
                return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));
    }

    handleTypeChange(event, {name, value}) {

        this.setState({[name]: value});

        if (value === 'air') {

           let airOptions = [
                             {text:"Air Freight", value :"airFreight"},
                             {text: "Duty Paid", value: "DutyPaid"},
                            ];

           this.setState({productOptions: airOptions});
        }

        if (value === 'sea') {

            let seaOptions = [
                {text:"LCL", value:"LCL"},
                {text: "FCL", value:"FCL"},
                {text: "Duty paid", value:"dutyPaid"},
                {text: "Barrell Service", value: "barrellService"}
            ];

            this.setState({productOptions: seaOptions});
        }

        if (value === 'courier') {

            let courierOptions = [
                {text: "uk", value: "uk"},
                {text: "euro", value: "euro"},
                {text: "int. courier", value: "intCourier"},
                {text: "Duty Paid", value: "dutyPaid"}
            ];

            this.setState({productOptions: courierOptions});
        }

        if (value === 'packaging') {

            let packagingOptions = [
                {text: "Home Repack", value: "homeRepack"},
                {text: "Home shrink wrap", value: "homeShrinkWrap"},
                {text: "View Goods", value: "viewGoods"},
                {text: "Drop Packaging", value: "dropPackaging"}
            ];

            this.setState({productOptions: packagingOptions});
        }

    }

    handleProductChange (event, {name, value }) {

        event.preventDefault();
        const { errorHandler } = this.props;
        return Promise.resolve(this.setState({[name]: value}))
            .then(() => {
                return this.handleFormValidation();
            })
            .then()
            .catch(error => errorHandler(error));

    }


    handleGenerateCollection(event){

        alert(event);
    }

    render() {

        var { piecesData, validationResult, bookingDate, typeOptions, productOptions, staffOptions } = this.state;

        const { validationErrors } = validationResult;

        // Get the functions from this.state
        const {
            handleDuplicatePiece,
            handleDeletePiece,
            handlePieceDataChange,
            handleCustomerNameChange,
            handleHouseNumberChange,
            handleStreetChange,
            handleGeneralDescriptionChange,
            handlePostCodeChange,
            handleCityChange,
            handleSpecialDeliveryChange,
            handleHazardousGoods,
            handleIsLooselyPacked,
            handleBookingDate,
            handleBookingDateTest,
            handleBookingTimeFrom,
            handleContactNumber,
            handleTypeChange,
            handleProductChange,
            handleStaffNameChange,
            handleGenerateCollection
        } = this;

        return (

            <Grid className='one column center aligned blue' class="form" container>
                <Grid.Column width={12}>
                    <Form onSubmit={this.handleSubmit} class="form">
                        <Segment className='raised small'>
                            Collection Call
                        </Segment>

                        <Header>
                            Staff Details
                        </Header>

                        <Form.Group widths='equal' className='package'>
                            <Form.Dropdown
                                label="Choose a staff"
                                name="staffName"
                                placeholder="Staff Name"
                                selection
                                options={ staffOptions }
                                onChange={ handleStaffNameChange }
                            />
                        </Form.Group>

                        <Header>
                            Collection Data
                        </Header>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={Input}
                                name='customerName'
                                placeholder='customerName'
                                label="Customer name"
                                onChange={handleCustomerNameChange}
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={Input}
                                name='contactNumber'
                                placeholder='Contact Number'
                                label='Contact Number'
                                onChange={handleContactNumber}
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={Input}
                                name='houseNumber'
                                placeholder='houseNumber'
                                label="House number"
                                onChange={handleHouseNumberChange}
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={Input}
                                name='street'
                                placeholder='street'
                                label="street"
                                onChange={handleStreetChange}
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={Input}
                                name='postcode'
                                placeholder='postcode'
                                label="postcode"
                                onChange={handlePostCodeChange}
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={Input}
                                name='city'
                                placeholder='city'
                                label="city"
                                onChange={handleCityChange}
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={TextArea}
                                name="specialInstructions"
                                placeholder="Special Instructions For Delivery"
                                label="Special instructions for Delivery"
                                onChange={handleSpecialDeliveryChange}
                                name="specialInstructions"
                            />
                        </Form.Group>

                        <Divider />

                        <Header>Enter Type and Product </Header>

                        <Form.Group widths='equal' className='package'>
                            <Form.Dropdown
                                label="Select a type: "
                                name="type"
                                placeholder="Select a type"
                                selection
                                onChange={ handleTypeChange }
                                options={ typeOptions }
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Dropdown
                                label="Select a product"
                                name="product"
                                placeholder="Select a product"
                                selection
                                options={ productOptions }
                                onChange={ handleProductChange }

                            />
                        </Form.Group>

                        <Header> Enter Booking Date and Time range: </Header>

                        <Form.Group widths='equal' className='package'>
                            <ReactCalendar
                                { ...bookingDate }
                                onChange ={handleBookingDateTest}
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={Input}
                                label="Enter the Booking Date"
                                placeholder="DD/MM/YYYY"
                                name="bookingDate"
                                onChange={this.handleBookingDate}
                                value = { this.state.bookingDate }
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Input
                                control={Input}
                                label="Enter a Booking time from: "
                                placeholder="use 24 hour time (MM/HH)"
                                name="bookingTimeFrom"
                                onChange={this.handleBookingTimeFrom}
                            />
                            <Form.Input
                                fluid
                                control={Input}
                                label="Enter a Booking time to: "
                                placeholder="use 24 hour time (MM/HH)"
                                name="bookingTimeTo"
                                onChange={this.handleBookingTimeTo}
                            />
                        </Form.Group>

                        <Form.Group widths='equal' className='package'>
                            <Form.Field
                                control={TextArea}
                                label="General description of Goods"
                                placeholder="General description of Goods"
                                onChange={handleGeneralDescriptionChange}
                                name="generalDescription"
                            />
                        </Form.Group>

                        <p> Are the items loosely packed? </p>
                        <input
                            name="isLooselyPacked"
                            type="checkbox"
                            label="Are parcels loosely packed? "
                            checked={this.state.isLooselyPacked}
                            onChange={this.handleIsLooselyPacked}
                        />

                        <p> Advise given about hazardous goods? </p>
                        <input
                            name="isHazardousGoods"
                            type="checkbox"
                            label="Advise about hazardous Goods"
                            checked={this.state.isHazardousGoods}
                            onChange={this.handleHazardousGoods}
                        />

                        <Divider />

                        { _.map(piecesData, pieceData => {
                            return(
                                <Grid.Row key={pieceData.id}>
                                    <Piece
                                        {...pieceData}
                                        handleDuplicate={ handleDuplicatePiece }
                                        handleChange={ handlePieceDataChange }
                                        handleDelete={ handleDeletePiece }

                                    />
                                </Grid.Row>);
                            })
                        }

                            <ValidationError validationErrors={validationErrors} />

                        <Button
                            content="Create a booking and collection"
                            className="red small"
                        />

                    </Form>

                </Grid.Column>
            </Grid>
        );
    }
}
