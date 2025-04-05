import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(res => res.json())
      .then(data => setCoin(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!coin) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{coin.name}</h1>
      <img src={coin.image.large} alt={coin.name} width="100" />
      <p dangerouslySetInnerHTML={{ __html: coin.description.en.slice(0, 300) }} />
      <p>Current Price: ${coin.market_data.current_price.usd}</p>
      <p>Market Cap: ${coin.market_data.market_cap.usd}</p>
    </div>
  );
};

export default CoinDetails;
