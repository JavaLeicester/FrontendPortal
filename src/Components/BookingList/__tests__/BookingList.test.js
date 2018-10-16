import App from '../App';
import React from 'react';
import { shallow } from 'enzyme';
import BookingList from '../BookingList';

it ('shows a bookingList', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(BookingList).length).toEqual(1);

});


