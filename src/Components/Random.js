import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_AP_GIPHY_API_KEY;
const Random = () => {
  const [gif, setGif] = useState("");
  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const output = await axios.get(url);
    console.log(output);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {}
  return (
    <div
      className="w-1/2 h-[450px] bg-green-500 gap-y-10 mt-[30px] 
    rounded-lg border border-black flex flex-col items-center gay-y-5"
    >
      <h1 className="text-2xl font-bold uppercase underline ">A Random Gif</h1>
      <img src={gif} width={450} />
      <button
        onClick={clickHandler}
        className="w-10/12 bg-white text-lg py-2 rounded-lg opacity-90 "
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
