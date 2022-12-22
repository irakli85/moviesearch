import React from 'react'

function MovieList(props) {
    const boxes = props.movies.map(
        (item,index) => {
            return <Box
            key={index}
            image={item.poster_path}
            title={item.original_title}
            rating={item.vote_average} />
        }
    )
    return (
        <div className='result-container'>
            {boxes}
        </div>

    )
}


const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className='container'>
            <img className='movie-img image' src={IMGPATH + props.image} alt="movie img" />
            <div className='middle'>
                <div className='text'>Watch</div>
            </div>
            <div>
                <span className='title'>{props.title}</span>
                <span className='rating'>&#11088;{props.rating}</span>
            </div>
        </div>
    )
}

export default MovieList