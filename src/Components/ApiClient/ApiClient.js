import axios from 'axios';

function getServerBaseUrl() {
    // just local development at the moment
    return `http://127.0.0.1:8080`;
}

export const SERVER_BASE_URL = getServerBaseUrl();

const url = `${SERVER_BASE_URL}/api/booking`;

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




