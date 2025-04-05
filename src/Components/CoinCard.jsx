import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`} className="coin-card">
      <img src={coin.image} alt={coin.name} width="40" />
      <h3>{coin.name}</h3>
      <p>Price: ${coin.current_price}</p>
      <p>Change: {coin.price_change_percentage_24h.toFixed(2)}%</p>
    </Link>
  );
};

export default CoinCard;
