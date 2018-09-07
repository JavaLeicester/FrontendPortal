class Booking {
    constructor(customerName, houseNumber, street, postcode, city, specialInstructions, generalDescription, isHazardousGoods, isLooselyPacked,  bookingDate, bookingTime, bookingTimeFrom, piecesData) {

        this.customerName = customerName;
        this.houseNumber = houseNumber;
        this.street = street;
        this.postcode = postcode;
        this.city = city;
        this.specialInstructions = specialInstructions;
        this.generalDescription = generalDescription;
        this.isHazardousGoods = isHazardousGoods;
        this.isLooselyPacked = isLooselyPacked;
        this.bookingDate = bookingDate;
        this.bookingTime = bookingTime;
        this.bookingTimeFrom = bookingTimeFrom;
        this.piecesData = piecesData;
    }
}

export default Booking;