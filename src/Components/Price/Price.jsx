import PropTypes from 'prop-types';
import React from 'react';
import { PriceIndicator } from './PriceIndicator';

export class Price extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            change: 0
        };
    }

    componentDidUpdate = (prevProps) =>{
        if(prevProps.price.buy !== this.props.price.buy){
            this.setState({change: this.props.price.buy - prevProps.price.buy});
        }
    };

    render = () => {
        const currency = this.props.price.pair.split(' ')[0];
        return (
            <div className='price-wrapper'>
                <div className={'price-header'+(this.state.change > 0 ? ' up': this.state.change <0? ' down': '')}>{this.props.price.pair}</div>
                <div className='prices'>
                    <PriceIndicator currency={currency} price={this.props.price.buy} buy={true} />
                    <PriceIndicator currency={currency} price={this.props.price.sell} buy={false} />
                </div>
            </div>
        );
    };
}

const { shape, string, number, bool } = PropTypes;

Price.propTypes = {
    price: shape({
        pair: string.isRequired,
        buy: number.isRequired,
        sell: number.isRequired,
        smth: bool
    }).isRequired
};