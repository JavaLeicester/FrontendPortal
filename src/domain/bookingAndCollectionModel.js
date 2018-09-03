import _ from 'lodash';

class bookingAndCollectionModel {
    constructor(weight, length, width, height) {
       this.id = _.uniqueId();
       this.weight = weight || 0;
       this.length = length || 0;
       this.width = width || 0;
       this.height = height || 0;
    }
}

export default bookingAndCollectionModel;
