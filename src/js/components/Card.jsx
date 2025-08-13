import React from "react"

const Card = (props) => {
    return (
        <div class="card w-75 text-center m-3">
            <img src={props.logo} class="card-img-top object-fit-contain"/>
            <div class="card-body">
                <h5 class="card-title bg-dark text-white border rounded">{props.title} </h5>
                <p class="card-text bg-light border rounded">{props.description} </p>
                <a href={props.url} class="btn btn-dark">Go to {props.title}</a>
            </div>
        </div>
    );
};


export default Card;