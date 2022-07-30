import React from 'react';
import logo from "../../assets/img_2.png"
import classes from "./CompositionPreview.module.css"
import {Link} from "react-router-dom";

const CompositionPreview = ({compositionName, creatorName, creationDate}) => {

    // TODO change canvas link to the composition (this is only for development)
    return (

        <Link className={classes.compositionPreview} to="/canvas">

            <div className={classes.drawingCanvas}>
                <img className={classes.previewImage} src={logo}
                     alt="Some Composition"/>
                <div className={classes.drawingDetails}>
                    <p>by {creatorName}</p>
                    <p>{creationDate}</p>
                </div>

            </div>
            <p className={classes.previewText}>{compositionName}</p>
        </Link>
    );
};

export default CompositionPreview;