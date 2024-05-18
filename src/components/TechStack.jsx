import React from "react";
import htmlLogo from "../Logo/html.png";
import js from "../Logo/js.png";
import css from "../Logo/css.png";
import react from "../Logo/react.png";
import tailwind from "../Logo/tailwind.png";
import bootstrap from "../Logo/bootstrap.png";
import java from "../Logo/java.png";
import python from "../Logo/python.png";

function TechStack() {

    const stackDets = [
        {
            id: "1",
            name: "Html5",
            img: htmlLogo,
            style: "hover:shadow-orange-700 shadow-orange-700"
        },

        {
            id: "2",
            name: "JavaScript",
            img: js,
            style: "hover:shadow-yellow-600 shadow-yellow-600"
        },

        {
            id: "3",
            name: "CSS",
            img: css,
            style: "hover:shadow-blue-700 shadow-blue-700"
        },

        {
            id: "4",
            name: "React",
            img: react,
            style:"hover:shadow-sky-500 shadow-sky-500"
        },

        {
            id: "5",
            name: "Tailwind",
            img: tailwind,
            style: "hover:shadow-sky-600 shadow-sky-600"
        },

        {
            id: "6",
            name: "Bootstrap",
            img: bootstrap,
            style: "hover:shadow-purple-700 shadow-purple-700"
        },

        {
            id: "7",
            name: "Java",
            img: java,
            style: "hover:shadow-red-600 shadow-red-600"
        },

        {
            id: "8",
            name: "Python",
            img: python,
            style: "hover:shadow-yellow-400 shadow-yellow-400"
        },

    ]

    return (
        <>
            <section id="techStack" className="bg-gradient-to-b from-zinc-800 to-zinc-950 flex flex-col justify-center items-center h-screen w-full py-[32rem] md:py-[25rem]">
                <div className="flex w-3/4 md:w-2/3 gap-12 flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold text-white">TechStack</h1>
                    <p className="text-white text-center">An overview of my preferred tools and technologies</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">

                        {stackDets.map(({ id, name, img, style }) =>
                            <div key={id} 
                                className={`flex flex-col justify-between gap-6 px-6 md:gap-8 py-4 md:px-4 md:py-6 items-center w-full h-32 md:h-40 lg:h-full bg-zinc-900 duration-200 rounded-lg cursor-pointer hover:shadow-md shadow-sm ${style}`}
>
                                <div className=" overflow-hidden h-20 w-auto">
                                    <img className="h-full object-contain" src={img} alt=" "/>
                                </div>
                                <p className=" leading-none text-zinc-400">{name}</p>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}

export default TechStack;