export const initialData = [
    { pair: "USD CHF", buy: 0.99143, sell: 0.99043 },
    { pair: "GBP USD", buy: 1.28495, sell: 1.2836 },
    { pair: "GBP CHF", buy: 1.27378, sell: 1.27147 },
    { pair: "EUR SEK", buy: 9.632, sell: 9.6055 },
    { pair: "USD JPY", buy: 110.467, sell: 110.417 },
    { pair: "EUR JPY", buy: 120.589, sell: 120.491 }
];

export const getNewData = () => {
    const newData = [];
    initialData.forEach(price => {
        newData.push({ ...price, buy: randomPrice(0.9 * price.buy, 1.1 * price.buy), sell: randomPrice(0.9 * price.sell, 1.1 * price.sell) })
    });
    return newData;
}

const randomPrice = (min, max) => Math.random() * (max - min) + max;