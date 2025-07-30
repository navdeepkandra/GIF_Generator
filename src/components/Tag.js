import React, { useState } from "react";
import Spinner from "./Spinner.js";
import useGif from "../hooks/useGif.js";

const Tag = () => {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-500 rounded-md border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-3xl underline uppercase font-bold">
        Random {tag} Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450px" alt="custom_gif"/>}

      <input
        className="w-10/12 rounded-lg py-2 text-lg mb-[3px] text-center"
        onChange={(e) => setTag(e.target.value)}
        value={tag}
      />
      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-yellow-500 rounded-lg py-2 text-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
