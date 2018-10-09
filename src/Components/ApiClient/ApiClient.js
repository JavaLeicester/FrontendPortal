import axios from 'axios';

function getServerBaseUrl() {
     // just local development at the moment
     // return `http://46.101.34.160:9000`;

     //return 'http://46.101.34.160:8085';
    return `http://localhost:8087`;
}

export const SERVER_BASE_URL = getServerBaseUrl();

const url = `${SERVER_BASE_URL}/api/bookings`;

export function getBooking() {
    return new Promise((resolve, reject) => {
       axios.get(url)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        });
    });

}

export function addBooking(bookings) {
    return new Promise((resolve, reject) => {
        axios.post(url, bookings)
            .then((response) => {
               resolve(response.data);
            })
            .catch((error) => {
               reject(error);
            });
    });
}




