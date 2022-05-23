import "./HomePostersSlide.css";

import React, { useState, useEffect } from "react";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { SliderData, promoAddsData } from "./SliderData";
const HomePostersSlide = () => {
    const [currentSlide, SetCurrentSlide] = useState(0);
    const slideLenght = SliderData.length;
    const autoscroll = true;
    let slideInterval;
    let intervalTime = 5000;

    useEffect(() => {
        SetCurrentSlide(0);
    }, []);

    const nextslide = () =>
        SetCurrentSlide(
            currentSlide === slideLenght - 1 ? 0 : currentSlide + 1
        );

    const prevSlide = () =>
        SetCurrentSlide(
            currentSlide === 0 ? currentSlide + 2 : currentSlide - 1
        );

    const auto = () => {
        slideInterval = setInterval(nextslide, intervalTime);
    };

    useEffect(() => {
        if (autoscroll) {
            auto();
        }

        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div id="homepostersslide">
            <h3 className="arrow arrowleft" onClick={prevSlide}>
                <IoCaretBack size={48} color="rgba(157, 157, 162, 0.506)" />
            </h3>
            <h3 className="arrow arrowright" onClick={nextslide}>
                <IoCaretForward size={48} color="rgba(157, 157, 162, 0.506)" />
            </h3>

            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={
                            index === currentSlide ? "current slide" : "slide"
                        }
                        key={index}
                    >
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="poster" />
                                <div className="content">
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.desc}</p>
                                    <hr />
                                    <button>Get Started</button>
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const PromoSlide = () => {
    const [currentSlide, SetCurrentSlide] = useState(0);
    const slideLenght = SliderData.length;
    const autoscroll = true;
    let slideInterval;
    let intervalTime = 5000;

    useEffect(() => {
        SetCurrentSlide(0);
    }, []);

    const nextslide = () =>
        SetCurrentSlide(
            currentSlide === slideLenght - 1 ? 0 : currentSlide + 1
        );

    const auto = () => {
        slideInterval = setInterval(nextslide, intervalTime);
    };

    useEffect(() => {
        if (autoscroll) {
            auto();
        }

        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div id="homepostersslide">
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={
                            index === currentSlide ? "current slide" : "slide"
                        }
                        key={index}
                    >
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="poster" />
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default HomePostersSlide;
