import PropTypes from 'prop-types';
import React from 'react';

export const PriceIndicator = props => {
    const price = props.price;
    const priceNumbers = price.toPrecision(6);
    return (
        <div className={'price-indicator' + (props.buy ? ' buy' : ' sell')}>
            {props.buy ?
                <span className='text'>Sell {props.currency}</span> :
                <span className='text'>Buy {props.currency}</span>
            }
            <div className='price'>
                <span className='start'>{priceNumbers.substring(0, priceNumbers.length - 4)}</span>
                <span className='middle'>{priceNumbers.substring(priceNumbers.length - 4, priceNumbers.length - 2)}</span>
                <span className='end'>{priceNumbers.substring(priceNumbers.length - 2, priceNumbers.length-1)}</span></div>
        </div>
    );
};
const { string, number, bool } = PropTypes;
PriceIndicator.propTypes = {
    currency: string.isRequired,
    price: number.isRequired,
    buy: bool.isRequired
}