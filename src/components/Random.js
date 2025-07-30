import Spinner from "./Spinner.js";
import useGif from '../hooks/useGif.js';

const Random = () => {
    const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-500 rounded-md border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-3xl underline uppercase font-bold'>A Random Gif</h1>

        {
            loading ? (<Spinner />) : (<img src={gif} width="450px" alt="random_gif"/>)
        }
      <button onClick={() => fetchData()} className='w-10/12 bg-yellow-500 rounded-lg py-2 text-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Random
