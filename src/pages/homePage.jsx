import React from 'react'
import InputSearch from '../components/InputSearch'
import Gallery from '../components/Gallery'

const HomePage = () => {
    return (
        <div className='max-w-[1200px] w-full mx-auto h-screen'>
            <InputSearch />
            <Gallery />
        </div>
    )
}

export default HomePage