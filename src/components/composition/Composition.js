import React, {Fragment, useEffect, useRef, useState} from 'react';
import canvas from "./canvas/Canvas";
import {loadImage} from "canvas";

const TEST_IMG_SOURCES = [
    "-1,-1.png",
    "-1,0.png",
    "-1,1.png",
    "0,-1.png",
    "0,0.png",
    "0,1.png",
    "1,-1.png",
    "1,0.png",
    "1,1.png",
]

const Composition = (props) => {


    const canvasRef = useRef(null)

    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

    const [netPanningX, setNetPanningX] = useState(0);
    const [netPanningY, setNetPanningY] = useState(0);

    const [isDragging, setIsDragging] = useState(false)

    useEffect(() => {

        const canvas = canvasRef.current;
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
                loadImage("https://www.codegrepper.com/images/logo_colors_small.png").then(image => {
                    context.drawImage(image, 250 * i + netPanningX, 250 * j + netPanningY);
                })
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

    // TODO implement throttle
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