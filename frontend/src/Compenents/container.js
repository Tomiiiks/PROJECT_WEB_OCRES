import React from 'react';

import { map, split } from 'lodash';
import './container.css';

/**
 * Data reçu :
 *  Devise 1, // Name
quantité
 Devise 2, // Name
 quantité

 */

export default class Container extends React.Component {
    renderInfo(label, info) {
        return (<div className='infoLine'>
            <div className='infoLabel'>{label}</div>
            <div className='info'>{info}</div>
        </div>);
    }

    renderInfos(label, infos) {
        return (<div className='infoLine'>
            <div className='infoLabel'>{label}</div>
            <div>{map(infos, info => <div className='info' key ={`infoList-${info}`}>{info}</div>)}</div>
        </div>);
    }

    render() {
        const { infos, changeCurrency } = this.props;
        const { id, currency1, currency2, nbCurrency1, nbCurrency2 } = infos;


        return (
            <div className='container'>
                <div className='infos'>
                    {this.renderInfo('devise 1', currency1)}
                    {this.renderInfo('devise 2', currency2)}
                    {this.renderInfo('total', nbCurrency1)}
                    {this.renderInfos('conversion', nbCurrency2)}

                </div>
            </div>)
    }
}