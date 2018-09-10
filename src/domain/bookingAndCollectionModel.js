import _ from 'lodash';

class bookingAndCollectionModel {
    constructor(weight, length, width, height, pieceType) {
       this.id = _.uniqueId();
       this.weight = weight || 0;
       this.length = length || 0;
       this.width = width || 0;
       this.height = height || 0;
       this.pieceType = pieceType || "";

    }
}

export default bookingAndCollectionModel;
