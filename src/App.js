import React, { useState, useEffect } from 'react';
import './App.css';
import CurrencyConverter from './CurrencyConverter';

function App() {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://openexchangerates.org/api/currencies.json'); // Adjust the path if needed
                const data = await response.json();
                setCurrencies(Object.keys(data));
            } catch (error) {
                console.error('Error fetching currencies:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Currency Converter</h1>
                {currencies.length > 0 ? (
                    <CurrencyConverter currencies={currencies} />
                ) : (
                    <p>Loading currencies...</p>
                )}
            </header>
        </div>
    );
}

export default App;
