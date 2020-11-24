import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:imgs, loading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            
            { loading && <p className='animate__animated animate__pulse'>Cargando...</p> }

            <div className='card-grid'>
                {
                    imgs.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
