import React, { useContext } from 'react'
import { ImageContext } from '../web'
import Image from './Image'
import Skeleton from './Skeleton'

const Images = () => {

    const {length, response, isLoading} = useContext(ImageContext)
    
  return (
    <>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8 max-w-7xl mx-auto px-4'>
            {isLoading ? <Skeleton item ={length} /> : response.map((data, key) => <Image key={key} data={data} />)}
        </div>
    </>
  )
}

export default Images