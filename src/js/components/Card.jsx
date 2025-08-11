import React from "react"

const Card = (props) => {
    return (
        <div class="card w-75">
            <img src={props.logo} class="card-img-top object-fit-contain"/>
            <div class="card-body">
                <h5 class="card-title">{props.title} </h5>
                <p class="card-text">{props.description} </p>
                <a href={props.url} class="btn btn-primary">Go to {props.title}</a>
            </div>
        </div>
    );
};


export default Card;