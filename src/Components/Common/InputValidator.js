import _ from 'lodash';
import validatorErrors from 'validator';

const { isEmpty } = validatorErrors;

// HandlePieceChange => this means that we validate after we update the form
// This method gets invoked after each modification of the text input box
export default function InputValidator (customerName,
                                        contactNumber,
                                        houseNumber,
                                        street,
                                        postcode,
                                        city,
                                        specialInstructions,
                                        generalDescription,
                                        pieceData,
                                        isLooselyPacked,
                                        isHazardousGoods,
                                        bookingDate,
                                        bookingTimeTo,
                                        bookingTimeFrom,
                                        product,
                                        type,
                                        staffName
                                        ) {

    const validationErrors = {};
    let isFormValid = true;

    return new Promise((resolve, reject) => {

        if (isEmpty(customerName)) {

            validationErrors['customerName'] = {key: _.uniqueId(), isCustomerNameValid: false, message: "From Customer Name should be valid"};
            isFormValid = false;
        }

        if (isEmpty(contactNumber)) {

            validationErrors['contactNumber'] = {key: _.uniqueId(), isContactNumberValid: false, message: "From contact number should be valid"};
            isFormValid = false;
        }

        if(isEmpty(houseNumber)) {
            validationErrors['houseNumber'] = {key: _.uniqueId(), isHouseNumberValid: false, message: "From House Number should be valid"};
            isFormValid = false;
        }

        if(isEmpty(street)) {
            validationErrors['street'] = {key:_.uniqueId(), isStreetValid: false, message: "Street should be valid"};
            isFormValid = false;
        }

        if(isEmpty(postcode)) {
            validationErrors["postcode"] = {key: _.uniqueId(), isPostCodeValid: false, message: "postcode not valid"};
            isFormValid = false;
        }

        if(isEmpty(city)) {
            validationErrors["city"] = {key: _.uniqueId(), isCityValid: false, message: "City not valid"};
            isFormValid = false;
        }

        if(isEmpty(specialInstructions)) {
            validationErrors["specialInstructions"] = {key: _.uniqueId(), isSpecialInstructionValid: false, message: "Special instructions not valid"};
            isFormValid = false;
        }

        if(isEmpty(generalDescription)) {
            validationErrors["generalDescription"] = {key: _.uniqueId(), isGeneralDescriptionValid: false, message: "General Description not valid"};
            isFormValid = false;
        }

        if(isLooselyPacked === false) {
            validationErrors["isLooselyPacked"] = {key: _.uniqueId(), isIsLooselyPackedValid: false, message: "please select the checkbox"};
            isFormValid = false;
        }

        if(isHazardousGoods === false) {
            validationErrors["isHazardousGoods"] = {key: _.uniqueId(), isIsHazardousGoodsValid: false, message: "please select tick box"};
            isFormValid = false;
        }

        var result = bookingDate.split("/");
        var day = result[0];
        var month = result[1];
        var year = result[2];

        if (isEmpty(bookingDate) || (bookingDate.length !== 10 ) || (day.length !== 2 && isNaN(day)) || (month.length !== 2 || isNaN(month)) || (year.length !== 4 || isNaN(year))) {
            validationErrors["bookingDate"] = {key: _.uniqueId(), isBookingDateValid: false, message: "please fill out booking date"};
            isFormValid = false;
        }

        var bookTimeResult = bookingTimeTo.split(":");
        var hours = bookTimeResult[0];
        var minutes = bookTimeResult[1];

        if (isEmpty(bookingTimeTo) || (bookingTimeTo.length !== 5) || (isNaN(minutes)) || (isNaN(hours)) ) {
            validationErrors["bookingTimeTo"] = {key: _.uniqueId(), isBookingDateValid: false, message: "please fill out booking Time To in the correct format"};
            isFormValid = false;
        }

        // Not used
       // var bookingTimeFromResult = bookingTimeFrom.split(":");

        if (isEmpty(bookingTimeFrom) || (bookingTimeFrom.length !== 5) || (isNaN(minutes)) || (isNaN(hours)) ) {
            validationErrors["bookingTimeFrom"] = {key: _.uniqueId(), isBookingDateValid: false, message: "please fill out booking Time From in the correct format"};
            isFormValid = false;
        }

        if(isEmpty(type)) {
            validationErrors["type"] = {key: _.uniqueId(), isSpecialInstructionValid: false, message: "select a type"};
            isFormValid = false;
        }

        if(isEmpty(product)) {
            validationErrors["product"] = {key: _.uniqueId(), isSpecialInstructionValid: false, message: "select a product"};
            isFormValid = false;
        }

        if(isEmpty(staffName)) {
            validationErrors["staffName"] = {key: _.uniqueId(), isSpecialInstructionValid: false, message: "select a staff Member"};
            isFormValid = false;
        }

        Promise.resolve()
            .then(()=> {
               return  _.forEach(pieceData, q => {

                    const { weight, length, width, height, pieceType } = q;

                    if (weight < 0) {
                        isFormValid = false;
                        return Promise.reject(validationErrors[`${q.id}-${weight}`] = {
                           key: q.id,
                           isWeightValid: false,
                           message: 'weight should be a number and greater than 0'

                        });
                    }

                    if (length < 0) {
                        isFormValid = false;

                        return Promise.reject(validationErrors[`${q.id}-${weight}`] = {
                            key: q.id,
                            isLengthValid: false,
                            message: 'length should be a number and greater than 0'
                        });
                    }

                    if (width < 0) {
                        isFormValid = false;

                        return Promise.reject(validationErrors[`${q.id}-${length}`] = {
                            key: q.id,
                            isWidthValid: false,
                            message: 'Width should be a number and greater than 0'
                        });
                    }

                    if (height < 0) {
                        isFormValid = false;
                        
                        return Promise.reject(validationErrors[`${q.id} - ${height}`] = {
                            key: q.id,
                            isHeightValid: false,
                            message: "Height should be greater than 0"
                        });
                    }

                    if (isEmpty(pieceType)) {
                        isFormValid = false;

                        return Promise.reject(validationErrors[`${q.id} - ${pieceType}`] = {

                            key: q.id,
                            isPieceTypeValid: false,
                            message: "Piece type should have a valid"
                        });
                    }


                }); // End For Each

            }) // End Then

            // When you have checked each field individually
            // Then we must inspect the boolean value
            .then(() => {
                if (!isFormValid) {
                    return reject({ validationErrors, isFormValid, data: {customerName, contactNumber, houseNumber, street, postcode, city, specialInstructions, generalDescription, pieceData, bookingTimeFrom, bookingTime: bookingTimeTo, bookingDate, type, product, staffName }})
                }
                return resolve({
                    validationErrors,
                    isFormValid,
                    data: {customerName, contactNumber, houseNumber, street, postcode, city, specialInstructions, generalDescription, pieceData, bookingTimeFrom, bookingTime: bookingTimeTo, bookingDate, type, product, staffName }

                })

            })
            .catch(() => reject({validationErrors, isFormValid: false, data: {customerName, contactNumber, houseNumber, street, postcode, city, specialInstructions, generalDescription, pieceData, bookingTimeFrom, bookingTime: bookingTimeTo, bookingDate, type, product, staffName }}));


    }); // End first promise

}
