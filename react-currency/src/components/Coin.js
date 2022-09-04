import React, { useEffect, useState } from "react";

export default function Coin() {
  const [query, setQuery] = useState("");
  const [item, setItem] = useState([]);

  const api = `https://api.coingecko.com/api/v3/search?query=${query}`;
  const EventSubmit = async (e) => {
    e.preventDefault();

   try{
    const response = await fetch(api);
    const data = await response.json();
    setItem(data);
    console.log(data);
   }
   catch(err){
    console.log(err)
   }
  };

  const input = (e) => setQuery(e.target.value);

  return (
    <div>
      <form onSubmit={EventSubmit}>
        <label>serch for a new crybto</label>
        <input type="text" placeholder="enter your coin" onChange={input} />
        <button>submit </button>
      </form>

      {/* {item.map(items => {
        return <pre>{JSON.stringify(items.query)}</pre>
      })} */}

      <h1>coin : {item.id}</h1>
    </div>
  );
}
