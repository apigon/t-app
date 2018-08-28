import PropTypes from 'prop-types';
import React from 'react';
import { Price } from '../Price/Price';

export const PriceList = props => {
    return (
        <div className='price-list'>
            {props.data.map((price, index) => <Price key = {index} price={price} />)}
        </div>
    );
};

PriceList.propTypes = {
    data: PropTypes.array.isRequired
};