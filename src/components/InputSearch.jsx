import React, { useContext, useState } from 'react'
import { PhotoContext } from '../context/store';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';

const InputSearch = () => {

    const [search, setSearch] = useState("");
    const { dispatch } = useContext(PhotoContext);
    const [isLoading, setIsLoading] = useState(false);

    const fetchPhotos = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://api-phorn.onrender.com/api/${search}`);
            const data = await response.data;
            setIsLoading(false);
            return data;
        } catch (error) {
            console.log(error.message)
        }
    }

    if (isLoading) {
        return <div className='fixed top-0 left-0 bottom-0 right-0 grid place-items-center bg-black/80 backdrop-blur-md'>
            <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await fetchPhotos();
        setSearch("");
        localStorage.setItem("photos", JSON.stringify(data));
        dispatch({ type: "addPhoto", payload: data })
    }

    return (
        <div className='mx-auto px-4 my-4 w-full max-w-[600px] '>
            <h1 className='text-md sm:text-4xl my-4 text-white uppercase'>Look For Stuff</h1>
            <form className='  flex' onSubmit={handleSubmit}>
                <input className='px-4 py-2 w-full rounded-l-md outline-none border' type="text" placeholder='serach xxx' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className='px-4 py-2 rounded-r-md bg-blue-500 text-white' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default InputSearch