import React, { useState, useEffect } from 'react';
import CoinCard from '../Components/CoinCard';

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50')
      .then(res => res.json())
      .then(data => setCoins(data))
      .catch(err => console.log(err));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='search'>
      <input className='input'
        type="text"
        placeholder="Search Coin..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredCoins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default Home;
