import React, { useContext } from 'react'
import { PhotoContext } from '../context/store'
import { Link } from 'react-router-dom';

const Gallery = () => {

    const { photos } = useContext(PhotoContext);


    return (
        <div className='mx-4 gap-4 columns-2 sm:columns-4'>
            {
                photos.map((item, index) => (
                    <Link key={index} to={`/${item.id}`}>
                        <div className='rounded-xl mb-4'>
                            <img className='w-full h-full object-cover' src={`${item.images[0]}`} alt={item.title} />
                            <p className='text-md mt-2 flex text-white'>{item.title}</p>
                            {
                                item?.models?.map((model) => (
                                    <p key={model} className='text-xs flex text-red-400'>{model} |</p>
                                ))
                            }
                        </div>
                    </Link>
                ))
            }
        </div >
    )
}

export default Gallery