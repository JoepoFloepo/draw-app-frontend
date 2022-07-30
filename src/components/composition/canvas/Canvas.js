import React, {useEffect, useRef, useState} from 'react';
import classes from "./Canvas.module.css";

const Canvas = (props) => {

    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current;

        // todo find out what this does
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        canvas.style.width = `${window.innerWidth / 1.5}px`;
        canvas.style.height = `${window.innerHeight / 1.5}px`;

        const context = canvas.getContext('2d');

        context.scale(2, 2);


    }, [])


    const handleMouseDown = (e) => {
    }

    const handleMouseUp = () => {
    }

    const handleMouseOut = () => {
    }

    const handleMouseMove = (e) => {
    }

    return (
        <div className={classes.container}>
            <canvas
                className={classes.canvas}
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseOut={handleMouseOut}
            >
            </canvas>
        </div>
    );
};

export default Canvas;