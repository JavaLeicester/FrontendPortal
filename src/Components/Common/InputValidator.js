import _ from 'lodash';
import validatorErrors from 'validator';

const { isEmpty } = validatorErrors;

// HandlePieceChange => this means that we validate after we update the form
// This method gets invoked after each modification of the text input box
export default function InputValidator (customerName,
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
                                        bookingTime,
                                        bookingTimeFrom) {

    const validationErrors = {};
    let isFormValid = true;

    return new Promise((resolve, reject) => {

        if (isEmpty(customerName)) {

            validationErrors['customerName'] = {key: _.uniqueId(), isCustomerNameValid: false, message: "From Customer Name should be valid"};
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

        var bookTimeResult = bookingTime.split(":");
        var hours = bookTimeResult[0];
        var minutes = bookTimeResult[1];

        if (isEmpty(bookingTime) || (bookingTime.length !== 5) || (isNaN(minutes)) || (isNaN(hours)) ) {
            validationErrors["bookingTime"] = {key: _.uniqueId(), isBookingDateValid: false, message: "please fill out booking Time To in the correct format"};
            isFormValid = false;
        }

        var bookingTimeFromResult = bookingTimeFrom.split(":");
        var hours = bookingTimeFromResult[0];
        var minutes = bookingTimeFromResult[1];

        if (isEmpty(bookingTimeFrom) || (bookingTimeFrom.length !== 5) || (isNaN(minutes)) || (isNaN(hours)) ) {
            validationErrors["bookingTimeFrom"] = {key: _.uniqueId(), isBookingDateValid: false, message: "please fill out booking Time From in the correct format"};
            isFormValid = false;
        }

        Promise.resolve()
            .then(()=> {
               return  _.forEach(pieceData, q => {

                    const { weight, length, width, height } = q;

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
                            isWidthValid: false,
                            message: "Height should be greater than 0"
                        });
                    }
                }); // End For Each

            }) // End Then

            // When you have checked each field individually
            // Then we must inspect the boolean value
            .then(() => {
                if (!isFormValid) {
                    return reject({ validationErrors, isFormValid, data: {customerName, houseNumber, street, postcode, city, specialInstructions, generalDescription, pieceData}})
                }
                return resolve({
                    validationErrors,
                    isFormValid,
                    data: {customerName, houseNumber, street, postcode, city, specialInstructions, generalDescription, pieceData}

                })

            })
            .catch(() => reject({validationErrors, isFormValid: false, data: {customerName, houseNumber, street, postcode, city, specialInstructions, generalDescription, pieceData} }));


    }); // End first promise

}