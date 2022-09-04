import React, { useEffect, useState } from "react";
import "./Coins.css";
export default function Coin() {
  const [query, setQuery] = useState("");
  const [item, setItem] = useState([]);

  const api = `https://api.coingecko.com/api/v3/search?query=${query}`;
  const EventSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(api);
      const data = await response.json();
      setItem(data.coins);
      console.log(data);
    } catch (err) {
      console.log(err);
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

      {item.map((items) => {
        return (
          <>
            <table>
              <tr>
                <th>name</th>
                <th>image</th>
                <th>market_cap_rank</th>
                <th>symbol</th>
              </tr>
              <tr>
                <td>{items.name}</td>
                <td>
                  {" "}
                  <img src={items.large} alt="img" />
                </td>
                <td>{items.symbol}</td>
                <td>{items.symbol}</td>
              </tr>
            </table>
          </>
        );
      })}
    </div>
  );
}
