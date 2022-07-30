import React, {Fragment, useEffect, useRef, useState} from 'react';

const Composition = (props) => {


    const canvasRef = useRef(null)

    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

    const [netPanningX, setNetPanningX] = useState(0);
    const [netPanningY, setNetPanningY] = useState(0);

    const [isDragging, setIsDragging] = useState(false)

    useEffect(() => {

        const canvas = canvasRef.current;

        // todo find out what this does
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;

        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext('2d');

        context.scale(2, 2);

        draw(context)

    }, [])


    const draw = (context) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let path1 = new Path2D();
                path1.rect(netPanningX + i * 600, netPanningY + j * 400, 600,400);
                context.stroke(path1);
            }
        }

    }

    const handleMouseDown = (e) => {
        setStartX(e.clientX);
        setStartY(e.clientY);
        setIsDragging(true)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseOut = () => {
        setIsDragging(false)
    }

    const handleMouseMove = (e) => {

        if (!isDragging) {
            return;
        }
        e.preventDefault();

        const distanceTraveledX = e.clientX - startX
        const distanceTraveledY = e.clientY - startY

        setStartX(e.clientX);
        setStartY(e.clientY);

        setNetPanningX(netPanningX + distanceTraveledX);
        setNetPanningY(netPanningY + distanceTraveledY);

        draw(canvasRef.current.getContext('2d'))
    }

    return (
        <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseOut}
        >
        </canvas>
    );
}

export default Composition;