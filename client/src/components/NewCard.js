import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

function NewCard(props) {
    let check = false
    useEffect(() => {
        // console.log('Props:', props)
    })
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.result.Poster} alt={props.poster_path}></img>
            </div>
            <div className="card-title">
                {
                    props
                    ?   <Link to={`/movies/${props._id}`}><h4 style={{letterSpacing: 0.3}}>{props.result.Title}</h4></Link>
                    :   <Link to={`/tv/${props._id}`}><h4 style={{letterSpacing: 0.3}}>{props.result.Title}</h4></Link>
                }
                
            </div>
            <div className="card-rating">
                <div>
                    <i className="fa fa-star" style={{marginRight: "8px", fontSize: '11px'}}></i>
                    <span>{props.result.popularity}</span>
                </div>
                {
                    check && 
                    <i className="fa fa-heart" style={{color: 'rgb(255, 45, 45)', fontSize: '15px', marginLeft: "15px"}}></i>
                }
            </div>
        </div>
    );
}

export default NewCard;