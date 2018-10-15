class Booking {
    constructor(mobile, customerName, houseNumber, street, postcode, city,
                specialInstructions, generalDescription, isHazardousGoods, isLooselyPacked,
                bookingDate, bookingTime, bookingTimeFrom, piecesData, product, type, staffName,
                receiverName, receiverContactNumber, receiverHouseNumber, receiverStreet, receiverPostCode, receiverCity

    ) {

        this.mobile = mobile;
        this.customerName = customerName;
        this.houseNumber = houseNumber;
        this.street = street;
        this.city = city;
        this.specialInstructions = specialInstructions;
        this.generalDescription = generalDescription;
        this.isHazardousGoods = isHazardousGoods;
        this.isLooselyPacked = isLooselyPacked;
        this.bookingDate = bookingDate;
        this.bookingTime = bookingTime;
        this.bookingTimeFrom = bookingTimeFrom;
        this.piecesData = piecesData;
        this.product = product;
        this.type = type;
        this.staffName = staffName;
        this.postCode = postcode;
        this.receiverName = receiverName,
        this.receiverContactNumber = receiverContactNumber,
        this.receiverHouseNumber = receiverHouseNumber,
        this.receiverStreet = receiverStreet,
        this.receiverPostCode = receiverPostCode,
        this.receiverCity = receiverCity
    }
}

export default Booking;
