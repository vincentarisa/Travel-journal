import React from "react";

export default function (props){
    return(
        <div className="container-fluid d-flex justify-content-center p-3">
            <div className="card shadow-lg custom-card w-75">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`../Images/${props.img}`} className="img-fluid vh-50" alt="Location Image"/>
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex pt-2 pb-2">
                                <span className="location-custom"><i className="bi bi-geo-alt-fill"/> {props.location}&nbsp;&nbsp;&nbsp;</span>
                                <a href={props.googleMapLink} target="_blank" className="grey google-link">View on Google Maps</a>
                            </div>

                            <div>
                                <h5 className="card-title fw-bold">{props.title}</h5>
                                <span className="fw-bold date-custom">{props.startDate.date} {props.startDate.month} {props.startDate.year} - </span>
                                <span className="fw-bold date-custom">{props.endDate.date} {props.endDate.month} {props.endDate.year} </span>
                                <p className="card-text">{props.description}</p>
                                <p className="card-text"><small className="text-muted">Last updated {props.updated.date} {props.updated.month} {props.updated.year} </small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}