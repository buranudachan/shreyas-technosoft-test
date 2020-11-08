import React from "react";
import { Modal } from "antd";


const MovieDetail: React.FC<any> = (props) => {
    return (
        <Modal
            title={props.title}
            visible={props.open}
            onCancel={props.cancel}
            footer={false}
            width={props.width}
            closable={true}
            okText={props.okText}
        >
            <div>
                <div className="gx-flex-row">
                    <h4>Released:&nbsp;</h4>
                    <p className="text">
                        {props.movieDescription.Released}
                    </p>
                </div>
                <div className="gx-flex-row">
                    <h4>Writer:&nbsp;</h4>
                    <p className="text">
                        {props.movieDescription.Writer}
                    </p>
                </div>
                <div className="gx-flex-row">
                    <h4>Actors:&nbsp;</h4>
                    <p className="text">
                        {props.movieDescription.Actors}
                    </p>
                </div>
                <div className="gx-flex-row">
                    <h4>Plot:&nbsp;</h4>
                    <p className="text">
                        {props.movieDescription.Plot}
                    </p>
                </div>
                <div className="gx-flex-row">
                    <h4>Language:&nbsp;</h4>
                    <p className="text">
                        {props.movieDescription.Language}
                    </p>
                </div>
                <div className="gx-flex-row">
                    <h4>Country:&nbsp;</h4>
                    <p className="text">
                        {props.movieDescription.Country}
                    </p>
                </div>
                <div className="gx-flex-row">
                    <h4>Awards:&nbsp;</h4>
                    <p className="text">
                        {props.movieDescription.Awards}
                    </p>
                </div>
                <div className="gx-flex-row">
                    <h4>Metascore:&nbsp;</h4>
                    <p className="text">
                        {props.movieDescription.Metascore}
                    </p>
                </div>
                <div className="gx-flex-row">
                    <h4>imdbRating:&nbsp;</h4>
                    <p className="text">
                        {props.movieDescription.imdbRating}
                    </p>
                </div>
                <div className="gx-flex-row">
                    <h4>imdbVotes:&nbsp;</h4>
                    <p className="text">
                        {props.movieDescription.imdbVotes}
                    </p>
                </div>
                <div className="gx-flex-row">
                    <h4>Production:&nbsp;</h4>
                    <p className="text">
                        {props.movieDescription.Production}
                    </p>
                </div>
                <div className="gx-flex-row">
                    <h4>Website:&nbsp;</h4>
                    <p className="text">
                        {props.movieDescription.Website}
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default MovieDetail;