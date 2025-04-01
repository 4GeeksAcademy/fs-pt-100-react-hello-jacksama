import React from "react"
import dummiImage1 from "../../img/Map-plain.jpg";

const Card = () => {
    return (
            <div className="card p-1">
                <div className="card-header">
                    <img src={dummiImage1} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    );
};

export default Card;