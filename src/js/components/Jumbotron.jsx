import React from "react"

const Jumbotron = (props) => {
    return (
        <div class="row justify-content-center">
            <div class="col-10 bg-body-secondary py-4">
                <h1>Welcome Game Devs</h1>
                <h5><strong>Find the Perfect Game Engine for Your Project.</strong> </h5>
                <p>
                    Not sure where to start? Take our quick quiz to discover the game engine that best fits your goals, style, and experience. Compare top engines and start building with the right tools by your side.
                </p>
                <button type="button" class="btn btn-dark">Take Quiz!</button>
            </div>
        </div>
    );
};


export default Jumbotron;