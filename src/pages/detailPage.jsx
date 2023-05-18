import React, { useContext } from 'react'
import { PhotoContext } from '../context/store';
import { useParams } from 'react-router-dom';
// import { ImageGroup, Image } from 'react-fullscreen-image';


const DetailPage = () => {

    const { photos } = useContext(PhotoContext);

    const { id } = useParams();
    const titleName = photos.filter((item) => item.id === id)[0]?.title;
    const groupPhoto = photos.filter((item) => item.id === id)[0]?.images;
    console.log(groupPhoto)
    return (
        <div className='max-w-[1200px] w-full mx-auto h-screen'>
            <h1 className='text-2xl sm:text-4xl text-white m-4 '>{titleName}</h1>
            <div className='mx-4 gap-4 columns-2 sm:columns-4'>
                {
                    groupPhoto?.map((item, index) => (
                        <img
                            key={index}
                            className="rounded-xl mb-4 h-auto w-full"
                            src={item}
                            alt={item}
                        />
                    ))
                }
            </div >
        </div>
    )
}

export default DetailPage