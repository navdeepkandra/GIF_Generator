import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    
    async function fetchData(tag) {
        setLoading(true);
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imgSrc = data.data.images.downsized_large.url;
        setGif(imgSrc);
        setLoading(false);
    }

    useEffect(() => {
        fetchData("car");
    }, []);

    return {gif, loading, fetchData}
}

export default useGif
