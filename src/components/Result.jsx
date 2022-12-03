import React from 'react'

export default function Result(props) {
    const boxes = props.movies.map(
        (item,index) => {
            return <Box key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average} />
        }
    )
    return (
        <div className=''>
            {boxes}
        </div>

    )
}


const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className='box-1'>
            <img className='movie-img' src={IMGPATH + props.image} alt="" />
            <div>
                <span>{props.title}</span>
                <span>{props.rating}</span>
            </div>
        </div>
    )
}