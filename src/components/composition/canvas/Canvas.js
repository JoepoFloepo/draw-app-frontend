import React, {useEffect, useRef, useState} from 'react';
import classes from "./Canvas.module.css";

const Canvas = (props) => {

    const canvasRef = useRef(null)

    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {

        const canvas = canvasRef.current;

        // // todo find out what this does
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        canvas.style.width = `1200px`;
        canvas.style.height = `800px`;

        const context = canvas.getContext('2d');
        context.scale(2, 2);

    }, [])


    const handleMouseDown = (e) => {
        setIsDrawing(true);
    }

    const handleMouseUp = () => {
        setIsDrawing(false);
        const context = canvasRef.current.getContext('2d');

        context.beginPath();
    }

    const handleMouseOut = () => {
        setIsDrawing(false);
        const context = canvasRef.current.getContext('2d');
        context.beginPath();

    }

    const handleMouseMove = (e) => {
        if(!isDrawing){
            return;
        }

        const context = canvasRef.current.getContext('2d');
        const canvasBoundaries = canvasRef.current.getBoundingClientRect();

        context.lineWidth = 3;
        context.lineCap = 'round';

        // TODO mouse position is only correct at 0, 0
        context.lineTo((e.clientX  / 1.4) - canvasBoundaries.left / 1.4, (e.clientY / 1.4)- (canvasBoundaries.top / 1.4));
        context.stroke();
        context.beginPath();
        context.moveTo((e.clientX / 1.4) - canvasBoundaries.left / 1.4, (e.clientY / 1.4) - (canvasBoundaries.top / 1.4))
        console.log(e.clientY + "  " + canvasBoundaries.top)
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