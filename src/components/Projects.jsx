import React, { useState } from "react";
import Card from "./Card";
import Carousel from "./Carousel";
import dosewise from "../img/DoseWise.png";
import praiz from "../img/Praiz.png";
import portfolio from "../img/Portfolio.png"
import todo from "../img/todo.png"

import d1 from "../img/DoseWise/d1.png"
import d2 from "../img/DoseWise/d2.png"
import d3 from "../img/DoseWise/d3.png"

import p1 from "../img/Praiz/p1.png"
import p2 from "../img/Praiz/p2.png"
import p3 from "../img/Praiz/p3.png"
import p4 from "../img/Praiz/p4.png"

import pf1 from "../img/Portfolio/pf1.png"
import pf2 from "../img/Portfolio/pf2.png"
import pf3 from "../img/Portfolio/pf3.png"

import t1 from "../img/Todo/t1.png"

import k1 from "../img/Keeper/k1.png"

import ttt1 from "../img/TicTacToe/t1.png"

function Projects() {

    const [choiceSelected, setChoice] = useState("major");
    function handleSelect(event) {
        const choice = event.target.id;
        setChoice(choice);
        setCurrentDemo(0); // Reset current demo when switching between major and mini projects
        setSlideIndex(0); // Reset slide index when switching between major and mini projects
    }

    const majorProjectDets = [
        {
            id: "1",
            thumbnail: praiz,
            link: "https://praiz.co.in/",
            head: "Praiz",
            dets: "Praiz stands as a dynamic e-commerce jewelry platform, meticulously designed for a seamless and captivating user experience.",
            demoImg: [
                { url: p1 },
                { url: p2 },
                { url: p3 },
                { url: p4 }
            ]
        },
        {
            id: "2",
            thumbnail: dosewise,
            link: "https://dosewise.onrender.com/",
            head: "DoseWise",
            dets: "DoseWise is a healthcare app designed to provide convenient and efficient services related to medication management.",
            demoImg: [
                { url: d1 },
                { url: d2 },
                { url: d3 }
            ]
        },
        {
            id: "3",
            thumbnail: portfolio,
            link: "",
            head: "Portfolio",
            dets: "A portfolio website, meticulously designed to reveal my identity and showcase my skills. With a focus on presenting who I am and what I bring to the table in terms of expertise",
            demoImg: [
                { url: pf1 },
                { url: pf2 },
                { url: pf3 }
            ]
        }
    ]

    const miniProjectDets = [
        {
            id: "1",
            thumbnail: todo,
            link: "https://dothisfirst.netlify.app/",
            head: "ToDo",
            dets: "A simple todo list made using React for learning component management",
            demoImg: [
                { url: t1 }
            ]
        },
        {
            id: "2",
            thumbnail: k1,
            link: "https://gkeeperapp.netlify.app/",
            head: "Keeper App",
            dets: "A Keeper App is a small attempt to clone the Google Keeps App using react to learn about react components and hooks",
            demoImg: [
                { url: k1 }
            ]
        },
        {
            id: "3",
            thumbnail: ttt1,
            link: "https://tictactoeforu.netlify.app/",
            head: "Tic-Tac-Toe",
            dets: "A simple attempt to make a tic-tac-toe game using react to develop better understanding on react. ",
            demoImg: [
                { url: ttt1 }
            ]

        }
    ]

    const [currentSlideIndex, setSlideIndex] = useState(0);
    const [currentDemo, setCurrentDemo] = useState(0);
    const [carouselState, setCarouselState] = useState(0);

    function prevImgSlide() {
        const projectDets = choiceSelected === "major" ? majorProjectDets : miniProjectDets;
        currentSlideIndex === 0 ? setSlideIndex(projectDets[currentDemo].demoImg.length - 1) : setSlideIndex((prevValue) => prevValue - 1);
    }

    function nextImgSlide() {
        const projectDets = choiceSelected === "major" ? majorProjectDets : miniProjectDets;
        currentSlideIndex === projectDets[currentDemo].demoImg.length - 1 ? setSlideIndex(0) : setSlideIndex((prevValue) => prevValue + 1);
    }

    function changeToDotIndex(index) {
        setSlideIndex(index);
    }

    function openCarousel(index) {
        setCurrentDemo(index);
        setCarouselState(1);
    }

    function closeCarousel() {
        setCarouselState(0);
        setSlideIndex(0);
    }

    const projectDets = choiceSelected === "major" ? majorProjectDets : miniProjectDets;

    return (
        <>
            <section id="projects" className="flex flex-col justify-center items-center lg:h-screen w-full bg-gradient-to-b from-zinc-950 py-32 md:py-[10rem] lg:py-[25rem] to-zinc-800 overflow-hidden">
                <div className="lg:w-3/4 mx-auto text-center flex flex-col justify-center items-center gap-12 md:gap-10 lg:gap-14">

                    {carouselState === 1 && (
                        <Carousel
                            img={projectDets[currentDemo].demoImg[currentSlideIndex].url}
                            prevImg={prevImgSlide}
                            nextImg={nextImgSlide}
                            imgArr={projectDets[currentDemo].demoImg}
                            handleClose={closeCarousel}
                            carouselState={carouselState}
                            handleDotClick={changeToDotIndex}
                        />
                    )}

                    <h1 className="text-4xl font-semibold text-white">Projects</h1>

                    <p className="text-zinc-200 w-3/4 md:w-2/3">Here are some of the mini and major projects I've had the pleasure of working on. These projects represent not only my technical skills but also my creativity and dedication to bringing ideas to life.</p>

                    <div className="w-full">
                        <ul className="flex text-zinc-400 justify-center gap-10 md:gap-48">
                            <li
                                id="major"
                                className={`cursor-pointer relative after:content-[''] h-8 hover:text-white duration-200 ${choiceSelected === "major" ? "after:h-1 after:rounded after:bg-zinc-200 after:absolute after:bottom-0 after:left-[25%] after:w-1/2 text-white" : ""}`}
                                onClick={handleSelect}
                            >
                                Major Projects
                            </li>
                            <li
                                id="mini"
                                className={`cursor-pointer relative after:content-[''] h-8 hover:text-white duration-200 ${choiceSelected === "mini" ? "after:h-1 after:rounded after:bg-zinc-200 after:absolute after:bottom-0 after:left-[25%] after:w-1/2 text-white" : ""}`}
                                onClick={handleSelect}
                            >
                                Mini Projects
                            </li>
                        </ul>
                    </div>

                    <div className="w-3/4 md:w-[85%]">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                            {
                                choiceSelected === "major" && majorProjectDets.map(({ id, thumbnail, link, head, dets }, index) =>
                                    <Card
                                        key={id}
                                        img={thumbnail}
                                        details={dets}
                                        heading={head}
                                        openDemo={() => openCarousel(index)}
                                        link={link}
                                    />)
                            }
                            {
                                choiceSelected === "mini" && miniProjectDets.map(({ id, thumbnail, link, head, dets }, index) =>
                                    <Card
                                        key={id}
                                        img={thumbnail}
                                        heading={head}
                                        details={dets}
                                        openDemo={() => openCarousel(index)}
                                        link={link}
                                    />)
                            }
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Projects;
