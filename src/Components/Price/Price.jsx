import PropTypes from 'prop-types';
import React from 'react';
import { PriceIndicator } from './PriceIndicator';

export const Price = props => {
    const currency = props.price.pair.split(' ')[0];
    return (
        <div className='price-wrapper'>
            <div className='price-header'>{props.price.pair}</div>
            <div className='prices'>
                <PriceIndicator currency={currency} price={props.price.buy} buy={true} />
                <PriceIndicator currency={currency} price={props.price.sell} buy={false} />
            </div>
        </div>
    );
};

const { shape, string, number, bool } = PropTypes;

Price.propTypes = {
    price: shape({
        pair: string.isRequired,
        buy: number.isRequired,
        sell: number.isRequired,
        smth: bool
    }).isRequired
};