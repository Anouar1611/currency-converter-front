import React, { useState } from 'react';
import axios from 'axios';

const CurrencyConverter = ({ currencies }) => {
    const [amountToConvert, setAmountToConvert] = useState('');
    const [targetCurrency, setTargetCurrency] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');

    const handleConvert = () => {
        axios.post('/convert', {
            amountToConvert: parseFloat(amountToConvert),
            targetCurrency
        })
            .then(response => {
                setConvertedAmount(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="currency-converter">
            <label htmlFor="amountToConvert">Amount to Convert:</label>
            <input
                type="number"
                id="amountToConvert"
                value={amountToConvert}
                onChange={e => setAmountToConvert(e.target.value)}
            />

            <br />

            <label htmlFor="targetCurrency">Select Target Currency:</label>
            <select
                id="targetCurrency"
                value={targetCurrency}
                onChange={e => setTargetCurrency(e.target.value)}
            >
                <option value="">Select currency</option>
                {currencies.map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>

            <button onClick={handleConvert}>Convert</button>

            {convertedAmount && (
                <div>
                    <p>Converted Amount: {convertedAmount}</p>
                </div>
            )}
        </div>
    );
};

export default CurrencyConverter;
